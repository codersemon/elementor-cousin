// editor tabs 
const editorTabs = document.querySelectorAll('.editor-body-tabs .editor-body-tab');

// content tab's content 
const tabsContent = document.querySelectorAll('.tab-content')

// active tab content on click 
editorTabs[0].classList.add('active'); // initial active 
tabsContent[0].classList.add('active'); // initial active 

editorTabs.forEach((item, index) => {
    item.onclick = function(e){
        // getting all tab and remove active class 
        let tabs = Array.from(this.parentElement.children);
        tabs.forEach(tab => tab.classList.remove('active'));

        // remove active class from all tab's content 
        tabsContent.forEach(tc => tc.classList.remove('active'));

        // add active class on clicked tab 
        this.classList.add('active');

        // add active class to tab content 
        tabsContent[index].classList.add('active');
        console.log(tabsContent[index]);
    }
})

