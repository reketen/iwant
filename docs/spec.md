### **Tech Specification for Non-Verbal Communication Web App**

#### **1. Overview**
This web app is designed to assist a non-verbal 6-year-old in communicating their wants and needs. The app features a minimal and child-friendly design with large, easy-to-read text and visuals. It will play words aloud when buttons are tapped to provide clear, immediate auditory feedback.

#### **2. App Structure**

- **Three Columns Layout**:
  1. **First Column**: A large button with the word "I".
  2. **Second Column**: A large button with the word "WANT".
  3. **Third Column**: Two side-by-side scrollable lists:
     - **Left side**: List of things (BANANA, APPLE, JAM, WATER, CANDY, TOY, TABLET)
     - **Right side**: List of actions (EAT, DRINK, WALK, PEE, POOP)
     - Each item has an icon/illustration on top and large text below

- **Responsive Design**:
  The app will work across all devices with a web browser (smartphones, tablets, desktops). On smaller screens, the lists in the third column will stack vertically.

#### **3. Functionality**

- **Voice Feedback**:
  - Each word (e.g., "I", "WANT", "BANANA") will have a corresponding clear, neutral adult voice that plays immediately when the button is tapped.
  - The app does not display the sentence visually — it only plays the spoken words.
  
- **Sentence Building**:
  - When the word "I" is tapped, it will reset the current selection.
  - When the word "WANT" is tapped, it will be followed by a choice from the third column.
  - Tapping an item in either list in the third column will play the word associated with that item immediately.

- **Scrolling**:
  - Each list in the third column can be scrolled independently.
  - The separation into "things" and "actions" lists minimizes the need for extensive scrolling.

- **Visual Feedback**:
  - Simple visual feedback will be provided when any button is tapped, such as changing the button's color briefly or making it grow in size for a moment to show that the action has been registered.

#### **4. Design and Aesthetics**

- **Style**:
  - The app has a **clean and minimal design** with simple backgrounds and a focus on the buttons.
  - Large text ensures easy visibility.
  - Simple, child-friendly icons/illustrations represent each item/action.
  
- **Lists Layout**:
  - The third column is divided into two equal sections displayed side by side.
  - Each section has its own scrollable area with subtle visual separation.
  - No headers or labels to maximize space for the items.
  
- **Icons/Illustrations**:
  - The icons for the items/actions are easily recognizable and clear SVG illustrations.
  - The icons and text are large to accommodate easy interaction and reading.

#### **5. Interaction Flow**

- **Flow**:
  1. The user taps "I".
  2. The user taps "WANT".
  3. The user taps one of the items from either the things or actions list.
  4. The app immediately plays the sound for the word (e.g., "I WANT BANANA" is spoken aloud in parts as "I", "WANT", and then "BANANA").
  5. The app resets automatically every time the word "I" is tapped again.

- **Reset Mechanism**:
  - The app will automatically reset the current sentence and start over each time the user taps "I".

#### **6. Technical Specifications**

- **Platform**:
  - Web-based, compatible with all devices that have a browser (smartphones, tablets, desktop computers).
  
- **Technology Stack**:
  - **Frontend**: HTML, CSS, JavaScript (for interactivity, including button taps and scrolling).
  - **Text-to-Speech API**: Web Speech API using the browser's built-in text-to-speech capabilities.
  - **Images/Icons**: Simple SVG icons for all items.
  
- **User Interface**:
  - Large buttons for "I" and "WANT" with easy-to-tap clickable areas.
  - Two scrollable areas in the third column, each containing items with their own icons and text.

#### **7. Voice Specification**

- **Voice**:
  - Clear, neutral adult voice (uses default web-based text-to-speech or a selected high-quality voice that fits the requirement).
  - Speech rate slightly slowed for clarity.

#### **8. Accessibility and Usability**

- **Design for Children**:
  - High contrast between background and text/icons for visibility.
  - Text and icons large enough to be clearly visible for children.
  - Side-by-side lists make it easier to find desired items without excessive scrolling.
  
- **Interactive Feedback**:
  - Provides immediate feedback with visual and auditory responses when any button is tapped.
  
#### **9. Deployment and Maintenance**

- **Deployment**:  
  - The web app should be hosted on a server accessible via a URL and work across all modern web browsers (Chrome, Firefox, Safari, Edge).
  
- **Maintenance**:  
  - Since the list of items is fixed and cannot be updated, minimal maintenance will be required after the initial development.

#### **10. Future Enhancements (Optional)**

- **Customization**:
  - If needed in the future, a feature could be added to allow parents to update or add new items to the list.
  
- **Multilingual Support**:
  - Adding support for multiple languages or regional accents in the text-to-speech could be considered as a future enhancement.