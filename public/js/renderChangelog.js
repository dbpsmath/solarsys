// app.js

// Import the changelogEntries constant from changelog.js
import changelogEntries from './changelog.js';

// Use the most recent 12 entries
const recentEntries = changelogEntries.slice(-5);

// Use the changelogEntries array
console.log('Most Recent Changelog Entries:');
recentEntries.forEach(entry => {
    const listItem = document.createElement('li');
    listItem.textContent = entry;
    changelogList.appendChild(listItem);
});
