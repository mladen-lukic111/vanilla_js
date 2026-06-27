
const toggleButton = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});

// close button only close the sidebar
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
});