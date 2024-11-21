// External object to store the states of all settings checkboxes
// This object will dynamically update as checkboxes are interacted with
const settingsState = {};

// Example settings data, structured in groups with individual settings
const settingsData = [
    {
        groupName: 'General Settings',
        settings: [
            { 
                name: 'Enable Notifications', 
                shortDescription: 'Receive alerts', 
                fullDescription: 'Enables notifications for all important updates.', 
                type: 'checkbox' 
            },
            { 
                name: 'Username', 
                shortDescription: 'Enter your username', 
                fullDescription: 'Your unique username for the system.', 
                type: 'text' 
            },
            { 
                name: 'Theme', 
                shortDescription: 'Select a theme', 
                fullDescription: 'Choose between Light and Dark themes.', 
                type: 'dropdown', 
                options: ['Light', 'Dark'] 
            }
        ]
    }
];


document.documentElement.style.margin = '0';
document.documentElement.style.padding = '0';
document.documentElement.style.width = '100%';
document.documentElement.style.height = '100%';
document.documentElement.style.overflow = 'hidden';

document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.width = '100%';
document.body.style.height = '100%';
document.body.style.overflow = 'hidden';

// Create the main container for the application and append it to the document body
const mainContainer = document.createElement('div');
mainContainer.style.width = '100%';
mainContainer.style.height = '100%';
mainContainer.style.backgroundColor = '#121212'; // Dark background
mainContainer.style.display = 'flex';
mainContainer.style.flexDirection = 'column';
mainContainer.style.boxSizing = 'border-box';
document.body.appendChild(mainContainer);

/** 
 * Creates a modal window and returns an object to control it.
 * @param {string} id - Unique identifier for the modal window.
 * @param {HTMLElement} parent - The parent element where the modal will be appended.
 * @param {string} titleText - The title text displayed in the modal header.
 * @returns {object} - Object with methods to open, close, and add content to the modal.
 */
function createModal(id, parent, titleText) {
    // Check if a modal with the given ID already exists
    if (document.getElementById(id)) {
        console.warn(`A modal with ID "${id}" already exists.`);
        return null;
    }

    // Create the overlay (background) for the modal
    const overlay = document.createElement('div');
    overlay.id = id;
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Dark overlay
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';
    overlay.style.visibility = 'hidden'; // Initially hidden

    // Create the modal container
    const modal = document.createElement('div');
    modal.style.width = '400px';
    modal.style.padding = '20px';
    modal.style.backgroundColor = '#1e1e1e'; // Dark gray background for the modal
    modal.style.color = '#ffffff'; // White text color
    modal.style.borderRadius = '8px';
    modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.gap = '15px';

    // Create a header container for the title and close button
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'space-between';
    header.style.marginBottom = '15px';
    header.style.padding = '10px'; // Padding inside the header
    header.style.backgroundColor = '#2e2e2e'; // Darker background for the header
    header.style.borderBottom = '1px solid white'; // Line separating the header from the content
    header.style.borderRadius = '8px'; // Rounded top corners

    // Add the title to the header
    const title = document.createElement('h2');
    title.textContent = titleText;
    title.style.margin = '0';
    title.style.margin = '0 auto'; // Center the title horizontally
    title.style.textAlign = 'center';
    title.style.color = '#ffffff'; // White text color
    header.appendChild(title);

    // Add a close button to the header
    const closeButton = document.createElement('button');
    closeButton.textContent = '×'; // Icon for the close button
    closeButton.style.fontSize = '30px'; // Larger font for better visibility
    closeButton.style.fontWeight = 'bold';
    closeButton.style.color = '#ffffff'; // White color for the cross
    closeButton.style.border = 'none';
    closeButton.style.background = 'transparent';
    closeButton.style.cursor = 'pointer';
    closeButton.style.marginLeft = '10px';
    closeButton.style.padding = '0';
    closeButton.addEventListener('click', () => {
        modalObj.clearContent(); // Clear dynamic content on close
        modalObj.close();
    });
    closeButton.addEventListener('mouseenter', () => {
        closeButton.style.color = '#ff4444'; // Change to red on hover
    });
    closeButton.addEventListener('mouseleave', () => {
        closeButton.style.color = '#ffffff'; // Restore original color
    });

    // Append the close button to the header
    header.appendChild(closeButton);

    // Add the header to the modal
    modal.appendChild(header);

    // Append the modal to the overlay and the overlay to the parent
    overlay.appendChild(modal);
    parent.appendChild(overlay);

    // Object to control the modal window
    const modalObj = {
        element: overlay, // Reference to the overlay
        content: modal,   // Reference to the modal content
        open: () => {     // Opens the modal
            overlay.style.visibility = 'visible';
        },
        close: () => {    // Closes the modal
            overlay.style.visibility = 'hidden';
        },
        addContent: (content) => { // Adds content to the modal
            modal.appendChild(content);
        },
        clearContent: () => { // Removes all dynamically added content
            Array.from(modal.children).forEach(child => {
                if (child !== header) { // Only keep the header intact
                    modal.removeChild(child);
                }
            });
        },
    };

    return modalObj; // Return the control object
}

/** 
 * Populates the modal with grouped settings and links them to an external state.
 * Adds different types of input elements based on the provided settings data.
 * Includes a subtle line between settings for better separation.
 * @param {object} modalObj - The modal object returned by createModal.
 * @param {Array} settingsData - Array of groups and their settings.
 * @param {object} state - External object to store the states of inputs.
 */
function createSettingsMenu(modalObj, settingsData, state) {
    if (!modalObj || !modalObj.content) {
        console.error('Invalid modal object provided.');
        return;
    }

    settingsData.forEach(group => {
        // Create a group container
        const groupContainer = document.createElement('div');
        groupContainer.style.marginBottom = '20px';
        groupContainer.style.padding = '10px';
        groupContainer.style.border = '1px solid #444'; // Darker border
        groupContainer.style.borderRadius = '8px';
        groupContainer.style.backgroundColor = '#2e2e2e'; // Dark gray background

        // Add group title
        const groupTitle = document.createElement('h3');
        groupTitle.textContent = group.groupName;
        groupTitle.style.margin = '0 0 15px 0'; // Increased margin below the group title
        groupTitle.style.padding = '10px'; // Added padding for the title area
        groupTitle.style.backgroundColor = '#1e1e1e'; // Background to separate group visually
        groupTitle.style.color = '#ffffff'; // White text color
        groupTitle.style.borderRadius = '8px'; // Rounded edges for the title box
        groupTitle.style.border = '1px solid #444'; // Border for the title box
        groupTitle.style.textAlign = 'center'; // Center-align the group title
        groupContainer.appendChild(groupTitle);

        // Add each setting in the group
        group.settings.forEach((setting, index) => {
            const settingContainer = document.createElement('div');
            settingContainer.style.display = 'flex';
            settingContainer.style.flexDirection = 'column'; // Vertical stacking of rows
            settingContainer.style.marginBottom = '15px'; // Space between settings
            settingContainer.style.paddingBottom = '10px'; // Space above the line

            // Add a subtle border for separation (except the last setting)
            if (index < group.settings.length - 1) {
                settingContainer.style.borderBottom = '1px solid #444'; // Thin line
            }

            // First row: setting name and input element
            const topRow = document.createElement('div');
            topRow.style.display = 'flex';
            topRow.style.alignItems = 'center';
            topRow.style.width = '100%';

            // Setting name
            const settingName = document.createElement('label');
            settingName.textContent = setting.name;
            settingName.style.marginRight = '10px';
            settingName.style.cursor = 'help';
            settingName.title = setting.fullDescription; // Tooltip for full description
            settingName.style.color = '#ffffff'; // White text color
            topRow.appendChild(settingName);

            // Input element based on type
            let inputElement;
            if (setting.type === 'checkbox') {
                inputElement = document.createElement('input');
                inputElement.type = 'checkbox';
                inputElement.style.marginLeft = 'auto';
                inputElement.style.transform = 'scale(1.5)'; // Enlarged checkbox
                inputElement.style.marginRight = '10px'; // Add spacing
                inputElement.checked = state[setting.name] || false;
            } else if (setting.type === 'text') {
                inputElement = document.createElement('input');
                inputElement.type = 'text';
                inputElement.style.marginLeft = 'auto';
                inputElement.style.padding = '5px';
                inputElement.style.width = '200px'; // Fixed width for text input
                inputElement.value = state[setting.name] || ''; // Use existing value or default
            } else if (setting.type === 'dropdown') {
                inputElement = document.createElement('select');
                inputElement.style.marginLeft = 'auto';
                inputElement.style.padding = '5px';
                inputElement.style.width = '200px';
                (setting.options || []).forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option;
                    optionElement.textContent = option;
                    inputElement.appendChild(optionElement);
                });
                inputElement.value = state[setting.name] || (setting.options ? setting.options[0] : '');
            }

            // Bind input element to external state
            inputElement.addEventListener('change', () => {
                state[setting.name] = inputElement.type === 'checkbox' ? inputElement.checked : inputElement.value;
                console.log(`Setting "${setting.name}" updated: ${state[setting.name]}`);
            });
            topRow.appendChild(inputElement);

            // Second row: short description
            const shortDesc = document.createElement('span');
            shortDesc.textContent = setting.shortDescription;
            shortDesc.style.color = '#aaaaaa'; // Light gray for the short description
            shortDesc.style.fontSize = '0.85em'; // Slightly smaller font size
            shortDesc.style.marginTop = '5px'; // Small top margin
            settingContainer.appendChild(topRow);
            settingContainer.appendChild(shortDesc);

            // Append setting to the group container
            groupContainer.appendChild(settingContainer);
        });

        // Append group container to the modal content
        modalObj.addContent(groupContainer);
    });
}



// Create the modal
const settingsModal = createModal('settings-modal', mainContainer, 'Settings');

// Button to open the modal
const settingsButton = document.createElement('button');
settingsButton.textContent = 'Open Settings';
settingsButton.style.padding = '10px 20px';
settingsButton.style.margin = '20px';
settingsButton.style.border = 'none';
settingsButton.style.borderRadius = '4px';
settingsButton.style.backgroundColor = '#444'; // Dark button
settingsButton.style.color = '#fff'; // White text color
settingsButton.style.cursor = 'pointer';

settingsButton.addEventListener('click', () => {
    settingsModal.open(); // Open the modal
    createSettingsMenu(settingsModal, settingsData, settingsState); // Populate the modal with settings
    console.log('Settings state:', settingsState);
});

// Append the settings button to the main container
mainContainer.appendChild(settingsButton);
