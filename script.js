// Your code here.
document.addEventListener('DOMContentLoaded', () => {
    const skillLevels = {
        react: 95,
        css: 95,
        javascript: 95,
        nodejs: 90,
        mongodb: 90,
        python: 99,
        aws: 93,
    };

    Object.keys(skillLevels).forEach(skill => {
        const bar = document.querySelector(`.progress.${skill}`);
        bar.style.width = `${skillLevels[skill]}%`;
    });
});
