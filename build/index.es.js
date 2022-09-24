import*as n from"react";import e,{useState as t}from"react";!function(n,e){void 0===e&&(e={});var t=e.insertAt;if(n&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}}('@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");\n.folio-button {\n  border-radius: 0.8rem;\n  font-weight: 700;\n  font-size: 0.9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #7e8c9a;\n  border: 1px solid #7e8c9a;\n  -webkit-transition-property: color, background-color, border-color, fill;\n  -webkit-transition-duration: 0.2s;\n  -webkit-transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  transition-property: color, background-color, border-color, fill;\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  -webkit-transition-property: opacity;\n  -webkit-transition-duration: 0.2s;\n  -webkit-transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  transition-property: opacity;\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n}\n.folio-button:not(.folio-button--disabled) {\n  cursor: pointer;\n}\n.folio-button.folio-button--disabled {\n  cursor: not-allowed;\n}\n.folio-button:focus {\n  outline: none;\n}\n.folio-button:active {\n  -webkit-transition-duration: 0.2s;\n  transform: matrix(0.99, 0, 0, 0.99, 0, 0);\n  transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  transition-duration: 0.2s;\n}\n\n.folio-button:hover {\n  opacity: 0.6;\n}\n\n.folio-button--light {\n  background-color: #f2f5f7;\n  color: #0e141b;\n  padding-left: 1.2rem;\n  padding-right: 1.2rem;\n  padding-top: 0.8rem;\n  padding-bottom: 0.8rem;\n}\n\n.folio-button--dark {\n  border: 2px solid #7e8c9a;\n  background-color: #f2f5f7;\n  color: #7e8c9a;\n  padding-left: 1.2rem;\n  padding-right: 1.2rem;\n  padding-top: 0.8rem;\n  padding-bottom: 0.8rem;\n  background-color: transparent;\n}\n\n.folio-button--small {\n  line-height: 1.6rem;\n  padding-left: 0.4rem;\n  padding-right: 0.4rem;\n  font-size: 0.8rem;\n  border-radius: 0.4rem;\n  padding-top: 0.1rem;\n  padding-bottom: 0.1rem;\n  height: 2rem;\n}\n\n.folio-button--medium {\n  border-radius: 0.4rem;\n  line-height: 1.2rem;\n  padding-left: 0.8rem;\n  padding-right: 0.8rem;\n  padding-top: 0.3rem;\n  padding-bottom: 0.3rem;\n  min-height: 2.3rem;\n}\n\n.folio-button--large {\n  line-height: 1.6rem;\n  padding-top: 1.2rem;\n  padding-bottom: 1.2rem;\n  padding-left: 1.2rem;\n  padding-right: 1.2rem;\n  font-size: 1.3rem;\n  height: 3.5rem;\n}\n\n.folio-button__icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 0.4rem;\n}\n\n.folio-icon {\n  -webkit-user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n\n.folio-icon--1 {\n  width: 0.4rem;\n  height: 0.4rem;\n}\n\n.folio-icon--2 {\n  width: 0.8rem;\n  height: 0.8rem;\n}\n\n.folio-icon--3 {\n  width: 1.2rem;\n  height: 1.2rem;\n}\n\n.folio-icon--4 {\n  width: 1.32rem;\n  height: 1.32rem;\n}\n\n.folio-icon--5 {\n  width: 2rem;\n  height: 2rem;\n}\n\n.folio-icon--6 {\n  width: 2.4rem;\n  height: 2.4rem;\n}\n\n.folio-icon--7 {\n  width: 2.8rem;\n  height: 2.8rem;\n}\n\n.folio-icon--8 {\n  width: 3.2rem;\n  height: 3.2rem;\n}\n\n.folio-icon--9 {\n  width: 3.6rem;\n  height: 3.6rem;\n}\n\n.folio-icon--10 {\n  width: 4rem;\n  height: 4rem;\n}\n\n.folio-icon--11 {\n  width: 4.4rem;\n  height: 4.4rem;\n}\n\n.folio-icon--12 {\n  width: 4.8rem;\n  height: 4.8rem;\n}\n\n.folio-icon--15 {\n  width: 6rem;\n  height: 6rem;\n}\n\n.folio-icon--20 {\n  width: 8rem;\n  height: 8rem;\n}\n\n.folio-icon--25 {\n  width: 10rem;\n  height: 10rem;\n}\n\n.folio-icon--30 {\n  width: 12rem;\n  height: 12rem;\n}\n\n.folio-icon--light {\n  fill: #f2f5f7;\n}\n\n.folio-icon--dark {\n  fill: #0e141b;\n}\n\n.folio-tstack {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  border-radius: 0.8rem;\n  outline: 1px solid #7e8c9a;\n  justify-content: space-between;\n  width: 6rem;\n  height: 6rem;\n}\n.folio-tstack--medium {\n  width: 6rem;\n  height: 6rem;\n}\n.folio-tstack--large {\n  width: 12rem;\n  height: 12rem;\n}\n.folio-tstack--small {\n  width: 4.5rem;\n  height: 4.5rem;\n}\n.folio-tstack--bar {\n  padding-left: 0.4rem;\n  padding-right: 0.4rem;\n  padding-top: 0.4rem;\n  padding-bottom: 0.4rem;\n  border-radius: 0.4rem;\n  width: max-content;\n  height: max-content;\n  flex-direction: row;\n}\n\n.folio-tstack-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2rem;\n  height: 2rem;\n}\n.folio-tstack-item--medium {\n  width: 2rem;\n  height: 2rem;\n}\n.folio-tstack-item--large {\n  width: 4rem;\n  height: 4rem;\n}\n.folio-tstack-item--small {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.folio-tstack-item-icon--0 {\n  border-top-left-radius: 10px;\n}\n.folio-tstack-item-icon--2 {\n  border-top-right-radius: 10px;\n}\n.folio-tstack-item-icon--6 {\n  border-bottom-left-radius: 10px;\n}\n.folio-tstack-item-icon--8 {\n  border-bottom-right-radius: 10px;\n}\n.folio-tstack-item--disabled {\n  opacity: 0.6;\n}\n.folio-tstack-item:hover {\n  -webkit-transition-property: opacity;\n  -webkit-transition-duration: 0.2s;\n  -webkit-transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  transition-property: opacity;\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  opacity: 0.6;\n}\n\n.folio-label {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-left: 0.4rem;\n  padding-right: 0.4rem;\n  font-family: "Poppins", sans-serif;\n  font-weight: 500;\n  border-radius: 0.4rem;\n  color: #18222c;\n  background-color: #7e8c9a;\n  font-size: 0.8rem;\n  max-width: fit-content;\n  max-height: fit-content;\n}\n.folio-label--small {\n  font-size: 0.6rem;\n  border-radius: 0.4rem;\n}\n.folio-label--large {\n  font-size: 0.9rem;\n  border-radius: 0.4rem;\n}\n.folio-label--light {\n  background-color: #7e8c9a;\n}\n.folio-label--dark {\n  color: #d3d3d3;\n  background-color: #1e262f;\n}\n\n.folio-project {\n  border-radius: 1.2rem;\n  padding: 0.8rem;\n  outline: 4px solid #7e8c9a;\n  display: flex;\n  flex-direction: column;\n  width: 20rem;\n}\n.folio-project-header {\n  border-radius: 0.8rem;\n  display: flex;\n  flex-direction: row;\n}\n.folio-project-header--img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0.8rem;\n  background-color: #0e141b;\n  width: 6rem;\n  height: 6rem;\n}\n.folio-project-header--detials {\n  width: 8rem;\n  height: 6rem;\n}\n.folio-project-header--stack {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 6rem;\n  height: 6rem;\n}\n.folio-project-body {\n  padding-top: 1.2rem;\n  padding-bottom: 0.4rem;\n  font-size: 0.9rem;\n  font-family: "Poppins", sans-serif;\n  color: #f2f5f7;\n  line-height: 1rem;\n  font-weight: 500;\n  box-sizing: border-box;\n  text-align: justify;\n  max-height: 7em;\n}\n.folio-project-footer {\n  padding-top: 1.2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.folio-project--small {\n  width: 16rem;\n}\n.folio-project--small .folio-project-header--img {\n  width: 5rem;\n  height: 5rem;\n}\n.folio-project--small .folio-project-header--detials {\n  width: 6rem;\n  height: 5rem;\n}\n.folio-project--small .folio-project-header--stack {\n  width: 5rem;\n  height: 5rem;\n}\n.folio-project--small .folio-project-header--detials--title {\n  font-size: 1.1rem;\n}\n.folio-project--small .folio-project-header--detials--url {\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.folio-project--small .folio-project-header--detials--date {\n  font-size: 0.6rem;\n}\n.folio-project--small .folio-project-body {\n  font-size: 0.8rem;\n  line-height: 0.9rem;\n  font-weight: 500;\n  max-height: 8em;\n}\n.folio-project--small .folio-project-media--img img {\n  border-radius: 0.8rem;\n  -webkit-user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  overflow: hidden;\n  display: flex;\n  max-width: inherit;\n  max-height: inherit;\n  height: inherit;\n  width: inherit;\n  object-fit: cover;\n  height: 3rem;\n  width: 5rem;\n}\n.folio-project--small .folio-project-media--button {\n  height: 3rem;\n  width: 5rem;\n}\n.folio-project--small .folio-project-media--button--count {\n  font-size: 0.9rem;\n}\n.folio-project--small .folio-project-media--button--text {\n  font-size: 0.6rem;\n  font-weight: 700;\n}\n\n.folio-project-header--img img {\n  -webkit-user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  max-height: 100%;\n  max-width: 100%;\n  object-fit: cover;\n}\n\n.folio-project-header--detials {\n  padding-left: 0.4rem;\n  padding-right: 0.4rem;\n  font-family: "Poppins", sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-sizing: border-box;\n}\n.folio-project-header--detials--title {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #f2f5f7;\n}\n.folio-project-header--detials--url {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #d3d3d3;\n}\n.folio-project-header--detials--url a {\n  color: rgb(175, 175, 175);\n  text-decoration: none;\n}\n.folio-project-header--detials--date {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #0e141b;\n  color: #7e8c9a;\n}\n\n.folio-project-media {\n  padding-top: 0.4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.folio-project-media--img {\n  -webkit-user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  border-radius: 0.8rem;\n}\n.folio-project-media--img img {\n  border-radius: 0.8rem;\n  -webkit-user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  overflow: hidden;\n  display: flex;\n  max-width: inherit;\n  max-height: inherit;\n  height: inherit;\n  width: inherit;\n  object-fit: cover;\n  height: 4rem;\n  width: 6rem;\n}\n.folio-project-media--button {\n  box-shadow: rgba(103, 103, 103, 0.3) 0px 0px 0px 0.5px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #18222c;\n  border-radius: 0.8rem;\n  cursor: pointer;\n  border: none;\n  flex-direction: column;\n  height: 4rem;\n  width: 6rem;\n}\n.folio-project-media--button:focus {\n  outline: none;\n}\n.folio-project-media--button:active {\n  -webkit-transition-duration: 0.2s;\n  transform: matrix(0.99, 0, 0, 0.99, 0, 0);\n  transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  transition-duration: 0.2s;\n}\n.folio-project-media--button:hover {\n  opacity: 0.6;\n}\n.folio-project-media--button--count {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #0e141b;\n  color: #18222c;\n  line-height: 0.9rem;\n}\n.folio-project-media--button--text {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #0e141b;\n  color: #1e262f;\n  line-height: 0.9rem;\n}\n\n.folio-avatar {\n  -webkit-user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n.folio-avatar--circle img {\n  outline: 3px solid #7e8c9a;\n  border-radius: 50%;\n}\n.folio-avatar--square img {\n  outline: 3px solid #7e8c9a;\n  border-radius: 0.4rem;\n}\n\n.folio-avatar--2 {\n  width: 0.8rem;\n  height: 0.8rem;\n}\n.folio-avatar--2 img {\n  max-width: inherit;\n  max-height: inherit;\n  height: inherit;\n  width: inherit;\n  object-fit: cover;\n  object-fit: contain;\n}\n\n.folio-avatar--3 {\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.folio-avatar--3 img {\n  max-width: inherit;\n  max-height: inherit;\n  height: inherit;\n  width: inherit;\n  object-fit: cover;\n  object-fit: contain;\n}\n\n.folio-avatar--4 {\n  width: 1.32rem;\n  height: 1.32rem;\n}\n.folio-avatar--4 img {\n  max-width: inherit;\n  max-height: inherit;\n  height: inherit;\n  width: inherit;\n  object-fit: cover;\n  object-fit: contain;\n}\n\n.folio-avatar--5 {\n  width: 2rem;\n  height: 2rem;\n}\n.folio-avatar--5 img {\n  max-width: inherit;\n  max-height: inherit;\n  height: inherit;\n  width: inherit;\n  object-fit: cover;\n  object-fit: contain;\n}\n\n.folio-avatar--6 {\n  width: 2.4rem;\n  height: 2.4rem;\n}\n.folio-avatar--6 img {\n  max-width: inherit;\n  max-height: inherit;\n  height: inherit;\n  width: inherit;\n  object-fit: cover;\n  object-fit: contain;\n}\n\n.folio-avatar--7 {\n  width: 2.8rem;\n  height: 2.8rem;\n}\n.folio-avatar--7 img {\n  max-width: inherit;\n  max-height: inherit;\n  height: inherit;\n  width: inherit;\n  object-fit: cover;\n  object-fit: contain;\n}\n\n.folio-avatar--8 {\n  width: 3.2rem;\n  height: 3.2rem;\n}\n.folio-avatar--8 img {\n  max-width: inherit;\n  max-height: inherit;\n  height: inherit;\n  width: inherit;\n  object-fit: cover;\n  object-fit: contain;\n}\n\n.folio-avatar--9 {\n  width: 3.6rem;\n  height: 3.6rem;\n}\n.folio-avatar--9 img {\n  max-width: inherit;\n  max-height: inherit;\n  height: inherit;\n  width: inherit;\n  object-fit: cover;\n  object-fit: contain;\n}\n\n.folio-avatar--10 {\n  width: 4rem;\n  height: 4rem;\n}\n.folio-avatar--10 img {\n  max-width: inherit;\n  max-height: inherit;\n  height: inherit;\n  width: inherit;\n  object-fit: cover;\n  object-fit: contain;\n}\n\n.folio-avatar--11 {\n  width: 4.4rem;\n  height: 4.4rem;\n}\n.folio-avatar--11 img {\n  max-width: inherit;\n  max-height: inherit;\n  height: inherit;\n  width: inherit;\n  object-fit: cover;\n  object-fit: contain;\n}\n\n.folio-avatar--12 {\n  width: 4.8rem;\n  height: 4.8rem;\n}\n.folio-avatar--12 img {\n  max-width: inherit;\n  max-height: inherit;\n  height: inherit;\n  width: inherit;\n  object-fit: cover;\n  object-fit: contain;\n}\n\n.folio-avatar--15 {\n  width: 6rem;\n  height: 6rem;\n}\n.folio-avatar--15 img {\n  max-width: inherit;\n  max-height: inherit;\n  height: inherit;\n  width: inherit;\n  object-fit: cover;\n  object-fit: contain;\n}\n\n.folio-avatar--20 {\n  width: 8rem;\n  height: 8rem;\n}\n.folio-avatar--20 img {\n  max-width: inherit;\n  max-height: inherit;\n  height: inherit;\n  width: inherit;\n  object-fit: cover;\n  object-fit: contain;\n}\n\n.folio-avatar--25 {\n  width: 10rem;\n  height: 10rem;\n}\n.folio-avatar--25 img {\n  max-width: inherit;\n  max-height: inherit;\n  height: inherit;\n  width: inherit;\n  object-fit: cover;\n  object-fit: contain;\n}\n\n.folio-avatar--30 {\n  width: 12rem;\n  height: 12rem;\n}\n.folio-avatar--30 img {\n  max-width: inherit;\n  max-height: inherit;\n  height: inherit;\n  width: inherit;\n  object-fit: cover;\n  object-fit: contain;\n}\n\n.folio-contact {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.8em;\n  width: fit-content;\n  flex-direction: row;\n}\n\n.folio-contact--item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n\n.blogpost_container {\n  border-radius: 0.8rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #1e262f;\n  color: #f2f5f7;\n  padding: 1.2rem;\n  font-family: "Poppins", sans-serif;\n  line-height: 1.6rem;\n  cursor: pointer;\n  height: max-content;\n}\n.blogpost_container:hover {\n  -webkit-transition-property: opacity;\n  -webkit-transition-duration: 0.2s;\n  -webkit-transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  transition-property: opacity;\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n}\n.blogpost_container:hover .blogpost_main__title {\n  opacity: 0.6;\n}\n.blogpost_container:hover .blogpost_main__info {\n  opacity: 0.6;\n}\n.blogpost_main__title {\n  color: #f2f5f7;\n  font-weight: 600;\n  font-size: 1.1rem;\n  text-align: justify;\n}\n.blogpost_main__info {\n  color: #f2f5f7;\n  font-size: 0.9rem;\n  font-weight: 700;\n  padding-top: 0.8rem;\n  padding-bottom: 0.8rem;\n  color: #d3d3d3;\n  display: flex;\n  gap: 1em;\n}\n.blogpost_main__description {\n  color: #7e8c9a;\n  font-size: 0.9rem;\n  padding-top: 0.4rem;\n  padding-bottom: 0.4rem;\n  font-weight: 500;\n  text-align: justify;\n}\n.blogpost_main__footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0.4rem;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 1em;\n}\n.blogpost_main__footer:hover {\n  -webkit-transition-property: opacity;\n  -webkit-transition-duration: 0.2s;\n  -webkit-transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  transition-property: opacity;\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  opacity: 1;\n}\n\n.folio-dropdown_container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 3px solid #7e8c9a;\n  border-radius: 0.8rem;\n  cursor: pointer;\n  -webkit-transition-property: opacity;\n  -webkit-transition-duration: 0.2s;\n  -webkit-transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  transition-property: opacity;\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  -webkit-transition-property: color, background-color, border-color, fill;\n  -webkit-transition-duration: 0.2s;\n  -webkit-transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  transition-property: color, background-color, border-color, fill;\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  flex-direction: column;\n  width: 200px;\n}\n.folio-dropdown_container .folio-dropdown_item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-family: "Poppins", sans-serif;\n  color: #d3d3d3;\n  font-size: 0.9rem;\n  font-weight: 600;\n  padding: 0.4rem;\n  width: 100%;\n}\n.folio-dropdown_container .folio-dropdown_item__close {\n  color: rgb(225, 97, 23);\n}\n.folio-dropdown_container .folio-dropdown_title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.folio-dropdown_container .folio-dropdown_item:hover {\n  opacity: 0.5;\n}\n.folio-dropdown_container span {\n  font-family: "Poppins", sans-serif;\n  color: #d3d3d3;\n  font-size: 0.9rem;\n  font-weight: 600;\n  padding: 0.4rem;\n}');var i,o={exports:{}};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/i=o,function(){var n={}.hasOwnProperty;function e(){for(var t=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var r=typeof o;if("string"===r||"number"===r)t.push(o);else if(Array.isArray(o)){if(o.length){var a=e.apply(null,o);a&&t.push(a)}}else if("object"===r)if(o.toString===Object.prototype.toString)for(var l in o)n.call(o,l)&&o[l]&&t.push(l);else t.push(o.toString())}}return t.join(" ")}i.exports?(e.default=e,i.exports=e):window.classNames=e}();var r=o.exports;const a={graphql:"data:image/svg+xml,%3csvg width='28' height='30' viewBox='0 0 28 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M16.688 3.4522L23.1571 7.00949C23.3439 6.82129 23.5582 6.65976 23.7934 6.52991C25.135 5.79533 26.8463 6.23147 27.6256 7.50928C28.3969 8.7871 27.939 10.4168 26.5973 11.159C26.3638 11.287 26.1121 11.3825 25.8501 11.4423V18.5595C26.1093 18.6194 26.3582 18.7142 26.5893 18.841C27.939 19.5831 28.3969 21.2129 27.6176 22.4907C26.8463 23.7685 25.127 24.2046 23.7853 23.4701C23.5254 23.3281 23.2913 23.1471 23.0919 22.934L16.6622 26.4694C16.7563 26.7409 16.8042 27.0251 16.8038 27.3111C16.8038 28.7801 15.5506 29.9815 14 29.9815C12.4494 29.9815 11.1962 28.7877 11.1962 27.3111C11.1962 27.0486 11.2358 26.795 11.3096 26.5555L4.84225 22.9993C4.65753 23.1838 4.44622 23.3423 4.21465 23.4701C2.86497 24.2046 1.15369 23.7685 0.382373 22.4907C-0.38883 21.2129 0.0691227 19.5831 1.41072 18.841C1.64184 18.7142 1.89071 18.6194 2.14987 18.5594V11.4423C1.88785 11.3825 1.63623 11.287 1.40273 11.159C0.061029 10.4245 -0.396924 8.7871 0.374388 7.50928C1.1457 6.23147 2.86486 5.79533 4.20656 6.52991C4.44052 6.65907 4.65379 6.81956 4.83984 7.00647L11.3108 3.44824C11.2345 3.20167 11.1959 2.94592 11.1962 2.68887C11.1962 1.2123 12.4494 0.0185547 14 0.0185547C15.5506 0.0185547 16.8038 1.2122 16.8038 2.68887C16.8038 2.95428 16.7634 3.21043 16.688 3.4522ZM16.014 4.54824L22.4985 8.11387C22.3953 8.45762 22.3657 8.81765 22.4115 9.17252C22.4573 9.5274 22.5775 9.86988 22.7651 10.1796C23.1598 10.8336 23.8028 11.2671 24.5165 11.4361V18.5621C24.4801 18.5705 24.4439 18.5798 24.4079 18.5896L15.9387 4.6196C15.9643 4.59626 15.9894 4.57241 16.014 4.54824ZM12.0631 4.62116L3.59395 18.591C3.55733 18.5809 3.5205 18.5715 3.48348 18.5628V11.4361C4.19715 11.2671 4.84017 10.8336 5.2349 10.1796C5.42285 9.86928 5.54323 9.52608 5.58883 9.17049C5.63444 8.81489 5.60435 8.45419 5.50036 8.10991L11.983 4.54533C12.0092 4.57105 12.0358 4.59647 12.0631 4.62116ZM14.7835 5.25397L23.2506 19.2206C23.0567 19.3969 22.8904 19.5989 22.757 19.8203C22.6239 20.0404 22.5244 20.2775 22.4615 20.5243H5.53875C5.47572 20.2775 5.37614 20.0404 5.243 19.8203C5.10912 19.6004 4.94319 19.3997 4.75015 19.2241L13.219 5.2546C13.4728 5.32422 13.7358 5.35943 14 5.35918C14.272 5.35918 14.5348 5.32251 14.7835 5.25397ZM16.0735 25.5121L22.5159 21.9696C22.4966 21.9118 22.4794 21.8533 22.4642 21.7944H5.53514C5.52616 21.829 5.51646 21.8635 5.50604 21.8977L11.98 25.4576C12.2414 25.1987 12.5551 24.9929 12.9023 24.8525C13.2494 24.7121 13.6228 24.6401 14 24.6407C14.3903 24.6401 14.7765 24.7173 15.1336 24.8674C15.4907 25.0174 15.8109 25.2371 16.0735 25.5121Z' fill='%23E535AB'/%3e%3c/svg%3e",github:"data:image/svg+xml,%3csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_6_84)'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.5 0C5.87 0 0.5 5.37 0.5 12C0.5 17.31 3.935 21.795 8.705 23.385C9.305 23.49 9.53 23.13 9.53 22.815C9.53 22.53 9.515 21.585 9.515 20.58C6.5 21.135 5.72 19.845 5.48 19.17C5.345 18.825 4.76 17.76 4.25 17.475C3.83 17.25 3.23 16.695 4.235 16.68C5.18 16.665 5.855 17.55 6.08 17.91C7.16 19.725 8.885 19.215 9.575 18.9C9.68 18.12 9.995 17.595 10.34 17.295C7.67 16.995 4.88 15.96 4.88 11.37C4.88 10.065 5.345 8.985 6.11 8.145C5.99 7.845 5.57 6.615 6.23 4.965C6.23 4.965 7.235 4.65 9.53 6.195C10.49 5.925 11.51 5.79 12.53 5.79C13.55 5.79 14.57 5.925 15.53 6.195C17.825 4.635 18.83 4.965 18.83 4.965C19.49 6.615 19.07 7.845 18.95 8.145C19.715 8.985 20.18 10.05 20.18 11.37C20.18 15.975 17.375 16.995 14.705 17.295C15.14 17.67 15.515 18.39 15.515 19.515C15.515 21.12 15.5 22.41 15.5 22.815C15.5 23.13 15.725 23.505 16.325 23.385C18.7072 22.5807 20.7772 21.0497 22.2437 19.0074C23.7101 16.965 24.4993 14.5143 24.5 12C24.5 5.37 19.13 0 12.5 0Z' fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_6_84'%3e%3crect width='24' height='24' fill='white' transform='translate(0.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",link:"data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M13.29 9.28994L9.29 13.2899C9.19627 13.3829 9.12188 13.4935 9.07111 13.6154C9.02034 13.7372 8.9942 13.8679 8.9942 13.9999C8.9942 14.132 9.02034 14.2627 9.07111 14.3845C9.12188 14.5064 9.19627 14.617 9.29 14.7099C9.38296 14.8037 9.49356 14.8781 9.61542 14.9288C9.73728 14.9796 9.86799 15.0057 10 15.0057C10.132 15.0057 10.2627 14.9796 10.3846 14.9288C10.5064 14.8781 10.617 14.8037 10.71 14.7099L14.71 10.7099C14.8983 10.5216 15.0041 10.2662 15.0041 9.99994C15.0041 9.73364 14.8983 9.47824 14.71 9.28994C14.5217 9.10164 14.2663 8.99585 14 8.99585C13.7337 8.99585 13.4783 9.10164 13.29 9.28994Z' fill='black'/%3e%3cpath d='M12.28 17.4L11 18.67C10.2814 19.4105 9.31544 19.8605 8.28629 19.9343C7.25714 20.008 6.23684 19.7004 5.42 19.07C4.98827 18.7143 4.63597 18.2719 4.38584 17.7715C4.13571 17.2711 3.99333 16.7239 3.96788 16.165C3.94244 15.6062 4.0345 15.0482 4.23812 14.5271C4.44174 14.0061 4.75239 13.5336 5.15 13.14L6.57 11.71C6.66373 11.6171 6.73812 11.5065 6.78889 11.3846C6.83966 11.2628 6.8658 11.132 6.8658 11C6.8658 10.868 6.83966 10.7373 6.78889 10.6155C6.73812 10.4936 6.66373 10.383 6.57 10.29C6.47704 10.1963 6.36644 10.1219 6.24458 10.0711C6.12272 10.0204 5.99201 9.99424 5.86 9.99424C5.72799 9.99424 5.59728 10.0204 5.47542 10.0711C5.35356 10.1219 5.24296 10.1963 5.15 10.29L3.88 11.57C2.81016 12.606 2.15259 13.9951 2.02937 15.4792C1.90615 16.9633 2.32565 18.4418 3.21 19.64C3.73488 20.321 4.39864 20.8824 5.15719 21.2871C5.91574 21.6918 6.75171 21.9304 7.60958 21.9871C8.46745 22.0439 9.32757 21.9175 10.1328 21.6162C10.9381 21.315 11.67 20.8459 12.28 20.24L13.7 18.82C13.8883 18.6317 13.9941 18.3763 13.9941 18.11C13.9941 17.8437 13.8883 17.5883 13.7 17.4C13.5117 17.2117 13.2563 17.1059 12.99 17.1059C12.7237 17.1059 12.4683 17.2117 12.28 17.4ZM19.66 3.22004C18.4535 2.3265 16.963 1.90272 15.4668 2.02786C13.9707 2.153 12.5713 2.81849 11.53 3.90004L10.45 5.00004C10.3266 5.08977 10.2233 5.20443 10.147 5.33659C10.0707 5.46875 10.023 5.61546 10.007 5.76723C9.99093 5.919 10.007 6.07244 10.054 6.21763C10.101 6.36281 10.178 6.4965 10.28 6.61004C10.373 6.70377 10.4836 6.77816 10.6054 6.82893C10.7273 6.8797 10.858 6.90584 10.99 6.90584C11.122 6.90584 11.2527 6.8797 11.3746 6.82893C11.4964 6.77816 11.607 6.70377 11.7 6.61004L13 5.30004C13.7146 4.55635 14.6794 4.10387 15.7082 4.03C16.7369 3.95612 17.7565 4.26609 18.57 4.90004C19.0049 5.25584 19.36 5.69929 19.6122 6.2015C19.8643 6.70371 20.0077 7.25341 20.0332 7.81477C20.0587 8.37613 19.9656 8.93655 19.76 9.45953C19.5544 9.98251 19.2409 10.4563 18.84 10.85L17.42 12.28C17.3263 12.373 17.2519 12.4836 17.2011 12.6055C17.1503 12.7273 17.1242 12.858 17.1242 12.99C17.1242 13.122 17.1503 13.2528 17.2011 13.3746C17.2519 13.4965 17.3263 13.6071 17.42 13.7C17.513 13.7938 17.6236 13.8682 17.7454 13.9189C17.8673 13.9697 17.998 13.9958 18.13 13.9958C18.262 13.9958 18.3927 13.9697 18.5146 13.9189C18.6364 13.8682 18.747 13.7938 18.84 13.7L20.26 12.28C20.8642 11.6701 21.3318 10.9388 21.6321 10.1346C21.9323 9.33031 22.0582 8.47144 22.0015 7.61484C21.9447 6.75824 21.7067 5.92348 21.303 5.16583C20.8993 4.40818 20.3393 3.74494 19.66 3.22004Z' fill='black'/%3e%3c/svg%3e",linkedin:"data:image/svg+xml,%3csvg width='29' height='29' viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M14.5 0C6.49177 0 0 6.49177 0 14.5C0 22.5082 6.49177 29 14.5 29C22.5082 29 29 22.5082 29 14.5C29 6.49177 22.5082 0 14.5 0ZM10.9505 20.5099H8.01427V11.0608H10.9505V20.5099ZM9.46427 9.90078C8.53687 9.90078 7.93724 9.24375 7.93724 8.43115C7.93724 7.60193 8.555 6.96453 9.50203 6.96453C10.4491 6.96453 11.0291 7.60193 11.0472 8.43115C11.0472 9.24375 10.4491 9.90078 9.46427 9.90078ZM21.6745 20.5099H18.7382V15.2733C18.7382 14.0544 18.3123 13.2267 17.2505 13.2267C16.4394 13.2267 15.9576 13.7871 15.7446 14.3263C15.666 14.5181 15.6464 14.79 15.6464 15.0604V20.5084H12.7086V14.0741C12.7086 12.8944 12.6709 11.9081 12.6316 11.0593H15.1827L15.3171 12.3718H15.376C15.7627 11.7556 16.7097 10.8463 18.2942 10.8463C20.226 10.8463 21.6745 12.1407 21.6745 14.9229V20.5099Z' fill='%23E2E2E2'/%3e%3c/svg%3e",email:"data:image/svg+xml,%3csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M15 0C11.0218 0 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30C18.9782 30 22.7936 28.4196 25.6066 25.6066C28.4196 22.7936 30 18.9782 30 15C30 11.0218 28.4196 7.20644 25.6066 4.3934C22.7936 1.58035 18.9782 0 15 0ZM7.5 7.5H22.5C22.7681 7.5 23.0269 7.55812 23.2669 7.665L15 17.3081L6.73313 7.665C6.97393 7.55555 7.23549 7.49928 7.5 7.5ZM5.625 20.625V9.375L5.62875 9.25687L11.1263 15.6712L5.68875 21.1088C5.6458 20.9511 5.62436 20.7884 5.625 20.625ZM22.5 22.5H7.5C7.335 22.5 7.17188 22.4775 7.01625 22.4362L12.3525 17.1L15.0019 20.19L17.6512 17.1L22.9875 22.4362C22.8299 22.4792 22.6671 22.5006 22.5037 22.5H22.5ZM24.375 20.625C24.375 20.79 24.3525 20.9531 24.3112 21.1088L18.8737 15.6712L24.3713 9.25687L24.375 9.375V20.625Z' fill='%23EDEDED'/%3e%3c/svg%3e",dark:"data:image/svg+xml,%3csvg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M14 19.6C15.4852 19.6 16.9096 19.01 17.9598 17.9598C19.01 16.9096 19.6 15.4852 19.6 14C19.6 12.5148 19.01 11.0904 17.9598 10.0402C16.9096 8.98999 15.4852 8.39999 14 8.39999V19.6Z' fill='%23D0D0D0'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M14 0C6.2678 0 0 6.2678 0 14C0 21.7322 6.2678 28 14 28C21.7322 28 28 21.7322 28 14C28 6.2678 21.7322 0 14 0ZM14 2.8V8.4C12.5148 8.4 11.0904 8.99 10.0402 10.0402C8.99 11.0904 8.4 12.5148 8.4 14C8.4 15.4852 8.99 16.9096 10.0402 17.9598C11.0904 19.01 12.5148 19.6 14 19.6V25.2C16.9704 25.2 19.8192 24.02 21.9196 21.9196C24.02 19.8192 25.2 16.9704 25.2 14C25.2 11.0296 24.02 8.18081 21.9196 6.0804C19.8192 3.98 16.9704 2.8 14 2.8V2.8Z' fill='%23D0D0D0'/%3e%3c/svg%3e",read:"data:image/svg+xml,%3csvg width='20' height='10' viewBox='0 0 20 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12 2H19C19.55 2 20 1.55 20 1C20 0.45 19.55 0 19 0H12C11.45 0 11 0.45 11 1C11 1.55 11.45 2 12 2ZM19 8H12C11.45 8 11 8.45 11 9C11 9.55 11.45 10 12 10H19C19.55 10 20 9.55 20 9C20 8.45 19.55 8 19 8ZM19 4H15C14.45 4 14 4.45 14 5C14 5.55 14.45 6 15 6H19C19.55 6 20 5.55 20 5C20 4.45 19.55 4 19 4ZM6.85 0.85C6.7795 0.780897 6.69013 0.734208 6.59314 0.715817C6.49616 0.697426 6.39589 0.708155 6.30499 0.746654C6.2141 0.785153 6.13663 0.849697 6.08235 0.932153C6.02807 1.01461 5.99942 1.11129 6 1.21V4H1C0.45 4 0 4.45 0 5C0 5.55 0.45 6 1 6H6V8.79C6 9.24 6.54 9.46 6.85 9.14L10.64 5.35C10.84 5.15 10.84 4.84 10.64 4.64L6.85 0.85Z' fill='%23F0F0F0'/%3e%3c/svg%3e"},l=e=>{const{id:t,className:i,size:o,color:l,symbol:c}=e,s=r("folio-icon",`folio-icon--${o}`,`folio-icon--${l}`,i),m=a[c];return n.createElement("img",{alt:c,id:t,className:s,src:m})};l.defaultProps={size:"6",color:"light",className:"",id:""};const c=e=>{const{onClick:t,color:i,size:o,disabled:a,children:l,icon:c,id:s,customStyles:m,classname:d}=e,h=r("folio-button",`folio-button--${i}`,`folio-button--${o}`,{"folio-button--disabled":a},d);return n.createElement("button",{disabled:a,type:"button",id:s,onClick:n=>{t&&t(n,e)},className:h,style:Object.assign({},m)},c&&n.createElement("div",{className:"folio-button__icon"},c),l)};c.defaultProps={color:"light",size:"medium",disabled:!1,id:"0",onClick:()=>null,icon:null,customStyles:"",classname:""};const s=n=>{const{classname:t,children:i,color:o,size:a}=n,l=r("folio-label",`folio-label--${o}`,`folio-label--${a}`,t);return e.createElement("div",{className:l},i)};s.defaultProps={classname:"",color:"light",size:"medium"};const m=n=>{switch(n){case"medium":default:return"4";case"large":return"7";case"small":return"2"}},d=e=>{const{className:t,size:i,type:o,icons:a,disable:c}=e,s=r("folio-tstack",`folio-tstack--${i}`,`folio-tstack--${o}`,t);return n.createElement("div",{className:s},((e,t,i)=>e.map(((e,o)=>n.createElement("div",{key:e,className:r("folio-tstack-item",`folio-tstack-item--${t}`,`folio-tstack-item-icon--${o}`,{"folio-tstack-item--disabled":null==i?void 0:i.includes(e)})},n.createElement(l,{size:m(t),symbol:e})))))(a,i,c))};d.defaultProps={disable:[],type:"grid",className:""};const h="small",f="Case Study",g="Github",p="Link",u="view more",b=160;const w=n=>n.map((n=>{const{src:t,alt:i}=n;return e.createElement("div",{key:t,className:"folio-project-media--img"},e.createElement("img",{alt:i,src:t}))})),C=n=>{const{title:t,url:i,date:o,stack:a,disable:m,size:C,image:{src:v,alt:x},description:y,previews:j,buttonPress:k,category:z}=n,_=r("folio-project",`folio-project--${C}`);return e.createElement("div",{className:_},e.createElement("div",{className:"folio-project-header"},e.createElement("div",{className:"folio-project-header--img"},e.createElement("img",{alt:x,src:v})),e.createElement("div",{className:"folio-project-header--detials"},e.createElement("div",{className:"folio-project-header--detials--title"},t),e.createElement("div",{className:"folio-project-header--detials--url"},e.createElement("a",{href:"https://google.lk"},i)),e.createElement(s,{size:C},z),e.createElement("div",{className:"folio-project-header--detials--date"},o)),e.createElement("div",{className:"folio-project-header--stack"},e.createElement(d,{icons:a||[],disable:m,size:C||h}))),e.createElement("div",{className:"folio-project-body"},null==y?void 0:y.substring(0,b)),e.createElement("div",{className:"folio-project-media"},j&&3===j.length&&w(j),j&&j.length>3&&e.createElement(e.Fragment,null,w(j.slice(0,2)),e.createElement("button",{onClick:e=>{(null==k?void 0:k.onClickViewMore)&&k.onClickViewMore(e,n)},type:"button",className:"folio-project-media--button"},e.createElement("span",{className:"folio-project-media--button--count"},j.length-2),e.createElement("span",{className:"folio-project-media--button--text"},u)))),e.createElement("div",{className:"folio-project-footer"},e.createElement("div",{className:"folio-project-footer--button"},e.createElement(c,{onClick:null==k?void 0:k.onClickCaseStudy,size:C},C===h&&f.length>10?f.split(" ")[0]:f)),e.createElement("div",{className:"folio-project-footer--button"},e.createElement(c,{onClick:null==k?void 0:k.onClickGithub,icon:e.createElement(l,{size:"3",symbol:"github"}),size:C},g)),e.createElement("div",{className:"folio-project-footer--button"},e.createElement(c,{onClick:null==k?void 0:k.onClickLink,icon:e.createElement(l,{size:"3",symbol:"link"}),size:C},p))))};C.defaultProps={stack:[],disable:[],size:h,description:"",previews:[],buttonPress:{onClickCaseStudy:()=>{},onClickGithub:()=>{},onClickLink:()=>{}},category:""};const v=e=>{const{size:t,shape:i,img:o,className:a}=e,l=r("folio-avatar",`folio-avatar--${t}`,`folio-avatar--${i}`,a);return n.createElement("div",{className:l},n.createElement("img",{alt:"avatar",src:o}))};v.defaultProps={size:"5",shape:"circle",className:""};const x=e=>{const{size:t,contacts:i,className:o}=e,a=r("folio-contact",`folio-contact--${t}`,o);return n.createElement("div",{className:a},((e,t="5")=>e.map((e=>{const i=r(`folio-contact--item-${e}`,"folio-contact--item");return n.createElement("div",{key:e.type,className:i},n.createElement(l,{size:t,symbol:e.type}))})))(i,t))};x.defaultProps={size:"5",className:""};const y=n=>{const{classname:t,color:i,title:o,description:a,category:m,date:h,stack:f,link:g}=n,p=r("blogpost_container",`blogpost_container--${i}`,t);return e.createElement("div",{className:p},e.createElement("div",{className:"blogpost_main"},e.createElement("div",{className:"blogpost_main__title"},o),e.createElement("div",{className:"blogpost_main__info"},e.createElement("div",{className:"blogpost_main__date"},h),e.createElement(s,null,m)),e.createElement("div",{className:"blogpost_main__description"},a),e.createElement("div",{className:"blogpost_main__footer"},e.createElement("a",{style:{textDecoration:"none"},href:g},e.createElement(c,{icon:e.createElement(l,{size:"4",symbol:"read"}),color:"dark"},"Read More")),0!==(null==f?void 0:f.length)&&e.createElement(d,{size:"small",type:"bar",icons:f||[]}))))};y.defaultProps={color:"light",classname:"",stack:[]};const j=n=>{const[i,o]=t([]),[a,l]=t(null),c=r("folio-dropdown"),s=n=>{i.length>0?o([]):o(n)},{data:m}=n;return e.createElement("div",{className:c},e.createElement("div",{className:"folio-dropdown_container"},e.createElement("span",{role:"presentation",className:"folio-dropdown_title",onKeyDown:()=>s(m),onClick:()=>s(m)},a?a.label:"Select Category"),i.map((n=>e.createElement("div",{role:"presentation",className:"folio-dropdown_item",onClick:()=>{l(n),o([])}},`${n.label.split(" ")[0]}  ${n.label.split(" ").slice(1).join(" ")}`))),i.length>0&&e.createElement("div",{role:"presentation",className:"folio-dropdown_item folio-dropdown_item__close",onClick:()=>{o([]),l(null)}},"Clear")))};j.defaultProps={};export{v as Avatar,y as Blog,c as Button,x as Contact,j as Dropdown,l as Icon,s as Label,C as Project,d as TechStack};
//# sourceMappingURL=index.es.js.map
