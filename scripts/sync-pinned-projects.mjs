import { writeFile } from 'node:fs/promises';

const username = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;
if (!username || !token) throw new Error('GITHUB_USERNAME and GITHUB_TOKEN are required.');

const query = `query PinnedProjects($login: String!) { user(login: $login) { pinnedItems(first: 6, types: REPOSITORY) { nodes { ... on Repository { name description url homepageUrl primaryLanguage { name } languages(first: 4, orderBy: {field: SIZE, direction: DESC}) { nodes { name } } } } } } }`;
const response = await fetch('https://api.github.com/graphql', { method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ query, variables: { login: username } }) });
const result = await response.json();
if (!response.ok || result.errors || !result.data?.user) throw new Error(`GitHub API error: ${result.errors?.map((error) => error.message).join(', ') || response.statusText}`);

const projects = result.data.user.pinnedItems.nodes.map((repo) => ({ name: repo.name, description: repo.description || 'توضیح این پروژه در گیت‌هاب اضافه می‌شود.', githubUrl: repo.url, demoUrl: repo.homepageUrl || null, language: repo.primaryLanguage?.name || null, topics: repo.languages.nodes.map((language) => language.name) }));
await writeFile('public/pinned-projects.json', `${JSON.stringify({ updatedAt: new Date().toISOString(), projects }, null, 2)}\n`);
