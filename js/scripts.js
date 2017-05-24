// Открытие окна логина
            var link = document.querySelector(".login");
            var popup = document.querySelector(".modal-content");
            var close = popup.querySelector(".modal-content-close");
            var loginFocus = popup.querySelector("[name=login]");
            var passFocus = popup.querySelector("[name=password]");
            var formReq = popup.querySelector("form"); 
            var storage = localStorage.getItem("login");
            var linkMap = document.querySelector(".footer-contacts a");
            var popupMap = document.querySelector(".modal-content-map");
            var closeMap = popupMap .querySelector(".modal-content-map .modal-content-close");
            link.addEventListener("click", function(event) {
                event.preventDefault();
                popup.classList.add("modal-content-show");   
//проверка локального хранилища на сохранённый логин
                if (storage) {
                    loginFocus.value = storage;
                    passFocus.focus();
                } else {
                    loginFocus.focus();
                }
            });
//Закрытие окна логина
            close.addEventListener("click", function(event) {
                event.preventDefault();
                popup.classList.remove("modal-content-show"); 
            });
//Открытие окна карты
            linkMap.addEventListener("click", function(event){
                event.preventDefault();
                popupMap.classList.add("modal-content-map-show");
            });
//Закрытие окна карты
            closeMap.addEventListener("click", function(event){
                event.preventDefault();
                popupMap.classList.remove("modal-content-map-show");
            });
//Проверка формы на пустые значения
            formReq.addEventListener("submit", function(event) {
                if (!loginFocus.value || !passFocus.value) {
                    event.preventDefault();
                    loginFocus.focus();
                } else {
                    localStorage.setItem("login", loginFocus.value);  
                }
            });
//Закрытие всплывающих окон по Esc
            window.addEventListener("keydown", function(event) {
                if (event.keyCode === 27) {
                    if(popup.classList.contains("modal-content-show")) {
                         popup.classList.remove("modal-content-show");                    
                    }
                }   if (popupMap.classList.contains("modal-content-map-show")) {
                    popupMap.classList.remove("modal-content-map-show");
                }  
            });