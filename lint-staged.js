module.exports = {
    '*.{js,jsx,ts,tsx}': ['eslint --max-warnings=0', 'yarn tests'],
    '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
};
