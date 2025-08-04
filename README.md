# To-Do List Web Application

A modern, responsive to-do list application built with vanilla HTML, CSS, and JavaScript. Features a clean interface with task management capabilities including create, read, update, delete operations, and task completion tracking.

## 🚀 Features

- **Task Management**: Create, view, edit, and delete tasks
- **Task Completion**: Mark tasks as complete with progress tracking
- **Date Management**: Set start and end dates for tasks
- **Urgency Indicators**: Visual warnings for overdue and due-today tasks
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Local Storage**: Persistent data storage in browser
- **Material Icons**: Clean, intuitive user interface
- **Date Formatting**: Human-readable date display

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox, transitions, and responsive design
- **Vanilla JavaScript**: ES6+ features including modules, local storage, and DOM manipulation
- **Google Material Icons**: Icon library for UI elements
- **Local Storage API**: Client-side data persistence

## 📱 Screenshots

### Main Dashboard
The main interface displays all tasks with urgency warnings and easy navigation.

### Task Creation
Clean form interface for adding new tasks with validation.

### Task Details
Comprehensive task view with edit, delete, and complete actions.

## 🏗️ Project Structure

```
todo-app/
├── index.html          # Main dashboard page
├── newTask.html        # Add new task page
├── editTask.html       # Edit existing task page
├── viewTask.html       # View task details page
├── styles.css          # Global styles and responsive design
├── main.js             # Main dashboard functionality
├── newTask.js          # New task creation logic
├── editTask.js         # Task editing functionality
├── viewTask.js         # Task viewing and actions
└── README.md           # Project documentation
```

## 🚦 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   ```

2. **Navigate to project directory**
   ```bash
   cd todo-app
   ```

3. **Open in browser**
   - Simply open `index.html` in your preferred web browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

4. **Start managing your tasks!**

## 💻 Usage

### Adding a New Task
1. Click the "Add New Task" button on the main page
2. Fill in the task title, description, start date, and end date
3. Click "Add Task" to save

### Viewing Task Details
1. Click the chevron (→) icon on any task card
2. View complete task information including description and dates
3. Access edit, delete, or complete actions

### Editing a Task
1. From the task details view, click the edit icon
2. Modify any task information
3. Click "Confirm" to save changes

### Completing a Task
1. From the task details view, click the green checkmark icon
2. Task will be marked as complete and removed from the active list
3. Completion counter is automatically updated

### Task Status Indicators
- **Orange Warning**: Tasks due today or overdue
- **Date Display**: Human-readable format (e.g., "15 January 2025")
- **Calendar Icons**: Visual date indicators

## 🔧 Key Features Explained

### Data Persistence
- All tasks are stored in browser's Local Storage
- Data persists between browser sessions
- Completed tasks counter maintains state

### Responsive Design
- Mobile-first approach with flexible layouts
- Touch-friendly interface elements
- Consistent experience across devices

### User Experience
- Intuitive navigation flow
- Visual feedback for all interactions
- Form validation and error handling
- Hover effects and smooth transitions

### Code Architecture
- Modular JavaScript with ES6 imports/exports
- Separation of concerns across files
- Consistent naming conventions
- Clean, maintainable code structure

## 🌟 Technical Highlights

- **ES6 Modules**: Clean code organization with import/export
- **URLSearchParams**: Elegant handling of page navigation with parameters
- **Local Storage Integration**: Robust client-side data management
- **Date Manipulation**: Custom date formatting and urgency calculations
- **DOM Manipulation**: Efficient dynamic content generation
- **Event Handling**: Comprehensive user interaction management

## 🔮 Future Enhancements

- [ ] Task categories and tags
- [ ] Search and filter functionality
- [ ] Task priority levels
- [ ] Due date notifications
- [ ] Export/import task data
- [ ] Dark mode toggle
- [ ] Task statistics and analytics
- [ ] Drag and drop task reordering

## 🙏 Acknowledgments

- Google Material Icons for the beautiful icon set
- Modern CSS techniques for responsive design inspiration
- JavaScript community for best practices and patterns

## 📞 Contact

Your Name - TazeemTayob17 - tazeemtayob17@gmail.com

Project Link: https://github.com/TazeemTayob17/ToDoListApp

---

⭐ **Star this repository if you found it helpful!**
