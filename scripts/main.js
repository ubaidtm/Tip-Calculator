function showTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.remove('active');
    });
  
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
      button.classList.remove('active');
    });
  
    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');
  
    // Add active class to the selected tab button
    if (tabId === 'standard') {
      document.getElementById('standardButton').classList.add('active');
    } else if (tabId === 'tip') {
      document.getElementById('tipButton').classList.add('active');
    }
  }
  