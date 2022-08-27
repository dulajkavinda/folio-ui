import{jsx as n,jsxs as e,Fragment as i}from"react/jsx-runtime";!function(n,e){void 0===e&&(e={});var i=e.insertAt;if(n&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css","top"===i&&o.firstChild?o.insertBefore(t,o.firstChild):o.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}}('@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");\n.folio-button {\n  border-radius: 0.8rem;\n  font-weight: 700;\n  font-size: 0.9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  -webkit-transition-property: color, background-color, border-color, fill;\n  -webkit-transition-duration: 0.2s;\n  -webkit-transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  transition-property: color, background-color, border-color, fill;\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  -webkit-transition-property: opacity;\n  -webkit-transition-duration: 0.2s;\n  -webkit-transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  transition-property: opacity;\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n}\n.folio-button:not(.folio-button--disabled) {\n  cursor: pointer;\n}\n.folio-button.folio-button--disabled {\n  cursor: not-allowed;\n}\n.folio-button:focus {\n  outline: none;\n}\n.folio-button:active {\n  -webkit-transition-duration: 0.2s;\n  transform: matrix(0.99, 0, 0, 0.99, 0, 0);\n  transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  transition-duration: 0.2s;\n}\n\n.folio-button:hover {\n  opacity: 0.6;\n}\n\n.folio-button--light {\n  background-color: #ffffff;\n  color: #0f1116;\n  padding-left: 1.2rem;\n  padding-right: 1.2rem;\n  padding-top: 0.8rem;\n  padding-bottom: 0.8rem;\n  box-shadow: rgba(103, 103, 103, 0.3) 0px 0px 0px 0.5px;\n}\n\n.folio-button--small {\n  line-height: 1.6rem;\n  padding-left: 0.8rem;\n  padding-right: 0.8rem;\n  font-size: 0.8rem;\n  border-radius: 0.4rem;\n  padding-top: 0.1rem;\n  padding-bottom: 0.1rem;\n  height: 1.6rem;\n}\n\n.folio-button--medium {\n  border-radius: 0.4rem;\n  line-height: 1.6rem;\n  padding-left: 0.8rem;\n  padding-right: 0.8rem;\n  padding-top: 0.3rem;\n  padding-bottom: 0.3rem;\n  min-height: 2.2rem;\n}\n\n.folio-button--large {\n  line-height: 1.6rem;\n  padding-top: 1.2rem;\n  padding-bottom: 1.2rem;\n  padding-left: 1.2rem;\n  padding-right: 1.2rem;\n  font-size: 1.3rem;\n  height: 3.5rem;\n}\n\n.folio-button__icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 0.4rem;\n}\n\n.folio-icon {\n  -webkit-user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n\n.folio-icon--1 {\n  width: 0.4rem;\n  height: 0.4rem;\n}\n\n.folio-icon--2 {\n  width: 0.8rem;\n  height: 0.8rem;\n}\n\n.folio-icon--3 {\n  width: 1.2rem;\n  height: 1.2rem;\n}\n\n.folio-icon--4 {\n  width: 1.32rem;\n  height: 1.32rem;\n}\n\n.folio-icon--5 {\n  width: 2rem;\n  height: 2rem;\n}\n\n.folio-icon--6 {\n  width: 2.4rem;\n  height: 2.4rem;\n}\n\n.folio-icon--7 {\n  width: 2.8rem;\n  height: 2.8rem;\n}\n\n.folio-icon--8 {\n  width: 3.2rem;\n  height: 3.2rem;\n}\n\n.folio-icon--9 {\n  width: 3.6rem;\n  height: 3.6rem;\n}\n\n.folio-icon--10 {\n  width: 4rem;\n  height: 4rem;\n}\n\n.folio-icon--11 {\n  width: 4.4rem;\n  height: 4.4rem;\n}\n\n.folio-icon--12 {\n  width: 4.8rem;\n  height: 4.8rem;\n}\n\n.folio-icon--15 {\n  width: 6rem;\n  height: 6rem;\n}\n\n.folio-icon--20 {\n  width: 8rem;\n  height: 8rem;\n}\n\n.folio-icon--25 {\n  width: 10rem;\n  height: 10rem;\n}\n\n.folio-icon--30 {\n  width: 12rem;\n  height: 12rem;\n}\n\n.folio-icon--light {\n  fill: #ffffff;\n}\n\n.folio-icon--dark {\n  fill: #0f1116;\n}\n\n.folio-tstack {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  border-radius: 0.8rem;\n  box-shadow: rgba(103, 103, 103, 0.3) 0px 0px 0px 0.5px;\n  justify-content: space-between;\n  width: 6rem;\n  height: 6rem;\n}\n.folio-tstack--medium {\n  width: 6rem;\n  height: 6rem;\n}\n.folio-tstack--large {\n  width: 12rem;\n  height: 12rem;\n}\n.folio-tstack--small {\n  width: 4.5rem;\n  height: 4.5rem;\n}\n.folio-tstack--bar {\n  padding-left: 0.4rem;\n  padding-right: 0.4rem;\n  padding-top: 0.4rem;\n  padding-bottom: 0.4rem;\n  border-radius: 0.8rem;\n  width: max-content;\n  height: max-content;\n  flex-direction: row;\n}\n\n.folio-tstack-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2rem;\n  height: 2rem;\n}\n.folio-tstack-item--medium {\n  width: 2rem;\n  height: 2rem;\n}\n.folio-tstack-item--large {\n  width: 4rem;\n  height: 4rem;\n}\n.folio-tstack-item--small {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.folio-tstack-item-icon--0 {\n  border-top-left-radius: 10px;\n}\n.folio-tstack-item-icon--2 {\n  border-top-right-radius: 10px;\n}\n.folio-tstack-item-icon--6 {\n  border-bottom-left-radius: 10px;\n}\n.folio-tstack-item-icon--8 {\n  border-bottom-right-radius: 10px;\n}\n.folio-tstack-item--disabled {\n  opacity: 0.6;\n}\n.folio-tstack-item:hover {\n  -webkit-transition-property: opacity;\n  -webkit-transition-duration: 0.2s;\n  -webkit-transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  transition-property: opacity;\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  opacity: 0.6;\n}\n\n.folio-label {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-left: 0.4rem;\n  padding-right: 0.4rem;\n  font-family: "Poppins", sans-serif;\n  font-weight: 500;\n  border-radius: 0.4rem;\n  color: #1b1818;\n  background-color: #dddddd;\n  font-size: 0.8rem;\n  max-width: fit-content;\n  max-height: fit-content;\n}\n.folio-label--small {\n  font-size: 0.6rem;\n  border-radius: 0.4rem;\n}\n.folio-label--large {\n  font-size: 0.9rem;\n  border-radius: 0.4rem;\n}\n.folio-label--light {\n  background-color: #dddddd;\n}\n.folio-label--dark {\n  color: #fbfaf8;\n  background-color: #5e5e5e;\n}\n\n.folio-project {\n  border-radius: 1.2rem;\n  padding: 0.8rem;\n  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n  width: 20rem;\n}\n.folio-project-header {\n  border-radius: 0.8rem;\n  display: flex;\n  flex-direction: row;\n}\n.folio-project-header--img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0.8rem;\n  background-color: #0f1116;\n  width: 6rem;\n  height: 6rem;\n}\n.folio-project-header--detials {\n  width: 8rem;\n  height: 6rem;\n}\n.folio-project-header--stack {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 6rem;\n  height: 6rem;\n}\n.folio-project-body {\n  padding-top: 1.2rem;\n  padding-bottom: 0.4rem;\n  font-size: 0.9rem;\n  font-family: "Poppins", sans-serif;\n  color: #5e5e5e;\n  line-height: 1rem;\n  font-weight: 500;\n  box-sizing: border-box;\n  text-align: justify;\n  max-height: 7em;\n}\n.folio-project-footer {\n  padding-top: 1.2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.folio-project--small {\n  width: 16rem;\n}\n.folio-project--small .folio-project-header--img {\n  width: 5rem;\n  height: 5rem;\n}\n.folio-project--small .folio-project-header--detials {\n  width: 6rem;\n  height: 5rem;\n}\n.folio-project--small .folio-project-header--stack {\n  width: 5rem;\n  height: 5rem;\n}\n.folio-project--small .folio-project-header--detials--title {\n  font-size: 1.1rem;\n}\n.folio-project--small .folio-project-header--detials--url {\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.folio-project--small .folio-project-header--detials--date {\n  font-size: 0.6rem;\n}\n.folio-project--small .folio-project-body {\n  font-size: 0.8rem;\n  line-height: 0.9rem;\n  font-weight: 500;\n  max-height: 8em;\n}\n.folio-project--small .folio-project-media--img img {\n  border-radius: 0.8rem;\n  -webkit-user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  overflow: hidden;\n  display: flex;\n  max-width: inherit;\n  max-height: inherit;\n  height: inherit;\n  width: inherit;\n  object-fit: cover;\n  height: 3rem;\n  width: 5rem;\n}\n.folio-project--small .folio-project-media--button {\n  height: 3rem;\n  width: 5rem;\n}\n.folio-project--small .folio-project-media--button--count {\n  font-size: 0.9rem;\n}\n.folio-project--small .folio-project-media--button--text {\n  font-size: 0.6rem;\n  font-weight: 700;\n}\n\n.folio-project-header--img img {\n  -webkit-user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  max-height: 100%;\n  max-width: 100%;\n  object-fit: cover;\n}\n\n.folio-project-header--detials {\n  padding-left: 0.4rem;\n  padding-right: 0.4rem;\n  font-family: "Poppins", sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-sizing: border-box;\n}\n.folio-project-header--detials--title {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #1b1818;\n}\n.folio-project-header--detials--url {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #0f1116;\n  color: #5e5e5e;\n}\n.folio-project-header--detials--url a {\n  color: #5e5e5e;\n  text-decoration: none;\n}\n.folio-project-header--detials--date {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #0f1116;\n  color: #5e5e5e;\n}\n\n.folio-project-media {\n  padding-top: 0.4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.folio-project-media--img {\n  -webkit-user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  border-radius: 0.8rem;\n}\n.folio-project-media--img img {\n  border-radius: 0.8rem;\n  -webkit-user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  overflow: hidden;\n  display: flex;\n  max-width: inherit;\n  max-height: inherit;\n  height: inherit;\n  width: inherit;\n  object-fit: cover;\n  height: 4rem;\n  width: 6rem;\n}\n.folio-project-media--button {\n  box-shadow: rgba(103, 103, 103, 0.3) 0px 0px 0px 0.5px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #1b1818;\n  border-radius: 0.8rem;\n  cursor: pointer;\n  border: none;\n  flex-direction: column;\n  height: 4rem;\n  width: 6rem;\n}\n.folio-project-media--button:focus {\n  outline: none;\n}\n.folio-project-media--button:active {\n  -webkit-transition-duration: 0.2s;\n  transform: matrix(0.99, 0, 0, 0.99, 0, 0);\n  transition-timing-function: cubic-bezier(0.15, 0.44, 0.47, 0.99);\n  transition-duration: 0.2s;\n}\n.folio-project-media--button:hover {\n  opacity: 0.6;\n}\n.folio-project-media--button--count {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #0f1116;\n  color: #1b1818;\n  line-height: 0.9rem;\n}\n.folio-project-media--button--text {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #0f1116;\n  color: #5e5e5e;\n  line-height: 0.9rem;\n}');var o,t={exports:{}};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/o=t,function(){var n={}.hasOwnProperty;function e(){for(var i=[],o=0;o<arguments.length;o++){var t=arguments[o];if(t){var r=typeof t;if("string"===r||"number"===r)i.push(t);else if(Array.isArray(t)){if(t.length){var l=e.apply(null,t);l&&i.push(l)}}else if("object"===r)if(t.toString===Object.prototype.toString)for(var s in t)n.call(t,s)&&t[s]&&i.push(s);else i.push(t.toString())}}return i.join(" ")}o.exports?(e.default=e,o.exports=e):window.classNames=e}();var r=t.exports;const l={graphql:"data:image/svg+xml,%3csvg width='28' height='30' viewBox='0 0 28 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M16.688 3.4522L23.1571 7.00949C23.3439 6.82129 23.5582 6.65976 23.7934 6.52991C25.135 5.79533 26.8463 6.23147 27.6256 7.50928C28.3969 8.7871 27.939 10.4168 26.5973 11.159C26.3638 11.287 26.1121 11.3825 25.8501 11.4423V18.5595C26.1093 18.6194 26.3582 18.7142 26.5893 18.841C27.939 19.5831 28.3969 21.2129 27.6176 22.4907C26.8463 23.7685 25.127 24.2046 23.7853 23.4701C23.5254 23.3281 23.2913 23.1471 23.0919 22.934L16.6622 26.4694C16.7563 26.7409 16.8042 27.0251 16.8038 27.3111C16.8038 28.7801 15.5506 29.9815 14 29.9815C12.4494 29.9815 11.1962 28.7877 11.1962 27.3111C11.1962 27.0486 11.2358 26.795 11.3096 26.5555L4.84225 22.9993C4.65753 23.1838 4.44622 23.3423 4.21465 23.4701C2.86497 24.2046 1.15369 23.7685 0.382373 22.4907C-0.38883 21.2129 0.0691227 19.5831 1.41072 18.841C1.64184 18.7142 1.89071 18.6194 2.14987 18.5594V11.4423C1.88785 11.3825 1.63623 11.287 1.40273 11.159C0.061029 10.4245 -0.396924 8.7871 0.374388 7.50928C1.1457 6.23147 2.86486 5.79533 4.20656 6.52991C4.44052 6.65907 4.65379 6.81956 4.83984 7.00647L11.3108 3.44824C11.2345 3.20167 11.1959 2.94592 11.1962 2.68887C11.1962 1.2123 12.4494 0.0185547 14 0.0185547C15.5506 0.0185547 16.8038 1.2122 16.8038 2.68887C16.8038 2.95428 16.7634 3.21043 16.688 3.4522ZM16.014 4.54824L22.4985 8.11387C22.3953 8.45762 22.3657 8.81765 22.4115 9.17252C22.4573 9.5274 22.5775 9.86988 22.7651 10.1796C23.1598 10.8336 23.8028 11.2671 24.5165 11.4361V18.5621C24.4801 18.5705 24.4439 18.5798 24.4079 18.5896L15.9387 4.6196C15.9643 4.59626 15.9894 4.57241 16.014 4.54824ZM12.0631 4.62116L3.59395 18.591C3.55733 18.5809 3.5205 18.5715 3.48348 18.5628V11.4361C4.19715 11.2671 4.84017 10.8336 5.2349 10.1796C5.42285 9.86928 5.54323 9.52608 5.58883 9.17049C5.63444 8.81489 5.60435 8.45419 5.50036 8.10991L11.983 4.54533C12.0092 4.57105 12.0358 4.59647 12.0631 4.62116ZM14.7835 5.25397L23.2506 19.2206C23.0567 19.3969 22.8904 19.5989 22.757 19.8203C22.6239 20.0404 22.5244 20.2775 22.4615 20.5243H5.53875C5.47572 20.2775 5.37614 20.0404 5.243 19.8203C5.10912 19.6004 4.94319 19.3997 4.75015 19.2241L13.219 5.2546C13.4728 5.32422 13.7358 5.35943 14 5.35918C14.272 5.35918 14.5348 5.32251 14.7835 5.25397ZM16.0735 25.5121L22.5159 21.9696C22.4966 21.9118 22.4794 21.8533 22.4642 21.7944H5.53514C5.52616 21.829 5.51646 21.8635 5.50604 21.8977L11.98 25.4576C12.2414 25.1987 12.5551 24.9929 12.9023 24.8525C13.2494 24.7121 13.6228 24.6401 14 24.6407C14.3903 24.6401 14.7765 24.7173 15.1336 24.8674C15.4907 25.0174 15.8109 25.2371 16.0735 25.5121Z' fill='%23E535AB'/%3e%3c/svg%3e",github:"data:image/svg+xml,%3csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_6_84)'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.5 0C5.87 0 0.5 5.37 0.5 12C0.5 17.31 3.935 21.795 8.705 23.385C9.305 23.49 9.53 23.13 9.53 22.815C9.53 22.53 9.515 21.585 9.515 20.58C6.5 21.135 5.72 19.845 5.48 19.17C5.345 18.825 4.76 17.76 4.25 17.475C3.83 17.25 3.23 16.695 4.235 16.68C5.18 16.665 5.855 17.55 6.08 17.91C7.16 19.725 8.885 19.215 9.575 18.9C9.68 18.12 9.995 17.595 10.34 17.295C7.67 16.995 4.88 15.96 4.88 11.37C4.88 10.065 5.345 8.985 6.11 8.145C5.99 7.845 5.57 6.615 6.23 4.965C6.23 4.965 7.235 4.65 9.53 6.195C10.49 5.925 11.51 5.79 12.53 5.79C13.55 5.79 14.57 5.925 15.53 6.195C17.825 4.635 18.83 4.965 18.83 4.965C19.49 6.615 19.07 7.845 18.95 8.145C19.715 8.985 20.18 10.05 20.18 11.37C20.18 15.975 17.375 16.995 14.705 17.295C15.14 17.67 15.515 18.39 15.515 19.515C15.515 21.12 15.5 22.41 15.5 22.815C15.5 23.13 15.725 23.505 16.325 23.385C18.7072 22.5807 20.7772 21.0497 22.2437 19.0074C23.7101 16.965 24.4993 14.5143 24.5 12C24.5 5.37 19.13 0 12.5 0Z' fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_6_84'%3e%3crect width='24' height='24' fill='white' transform='translate(0.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",link:"data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M13.29 9.28994L9.29 13.2899C9.19627 13.3829 9.12188 13.4935 9.07111 13.6154C9.02034 13.7372 8.9942 13.8679 8.9942 13.9999C8.9942 14.132 9.02034 14.2627 9.07111 14.3845C9.12188 14.5064 9.19627 14.617 9.29 14.7099C9.38296 14.8037 9.49356 14.8781 9.61542 14.9288C9.73728 14.9796 9.86799 15.0057 10 15.0057C10.132 15.0057 10.2627 14.9796 10.3846 14.9288C10.5064 14.8781 10.617 14.8037 10.71 14.7099L14.71 10.7099C14.8983 10.5216 15.0041 10.2662 15.0041 9.99994C15.0041 9.73364 14.8983 9.47824 14.71 9.28994C14.5217 9.10164 14.2663 8.99585 14 8.99585C13.7337 8.99585 13.4783 9.10164 13.29 9.28994Z' fill='black'/%3e%3cpath d='M12.28 17.4L11 18.67C10.2814 19.4105 9.31544 19.8605 8.28629 19.9343C7.25714 20.008 6.23684 19.7004 5.42 19.07C4.98827 18.7143 4.63597 18.2719 4.38584 17.7715C4.13571 17.2711 3.99333 16.7239 3.96788 16.165C3.94244 15.6062 4.0345 15.0482 4.23812 14.5271C4.44174 14.0061 4.75239 13.5336 5.15 13.14L6.57 11.71C6.66373 11.6171 6.73812 11.5065 6.78889 11.3846C6.83966 11.2628 6.8658 11.132 6.8658 11C6.8658 10.868 6.83966 10.7373 6.78889 10.6155C6.73812 10.4936 6.66373 10.383 6.57 10.29C6.47704 10.1963 6.36644 10.1219 6.24458 10.0711C6.12272 10.0204 5.99201 9.99424 5.86 9.99424C5.72799 9.99424 5.59728 10.0204 5.47542 10.0711C5.35356 10.1219 5.24296 10.1963 5.15 10.29L3.88 11.57C2.81016 12.606 2.15259 13.9951 2.02937 15.4792C1.90615 16.9633 2.32565 18.4418 3.21 19.64C3.73488 20.321 4.39864 20.8824 5.15719 21.2871C5.91574 21.6918 6.75171 21.9304 7.60958 21.9871C8.46745 22.0439 9.32757 21.9175 10.1328 21.6162C10.9381 21.315 11.67 20.8459 12.28 20.24L13.7 18.82C13.8883 18.6317 13.9941 18.3763 13.9941 18.11C13.9941 17.8437 13.8883 17.5883 13.7 17.4C13.5117 17.2117 13.2563 17.1059 12.99 17.1059C12.7237 17.1059 12.4683 17.2117 12.28 17.4ZM19.66 3.22004C18.4535 2.3265 16.963 1.90272 15.4668 2.02786C13.9707 2.153 12.5713 2.81849 11.53 3.90004L10.45 5.00004C10.3266 5.08977 10.2233 5.20443 10.147 5.33659C10.0707 5.46875 10.023 5.61546 10.007 5.76723C9.99093 5.919 10.007 6.07244 10.054 6.21763C10.101 6.36281 10.178 6.4965 10.28 6.61004C10.373 6.70377 10.4836 6.77816 10.6054 6.82893C10.7273 6.8797 10.858 6.90584 10.99 6.90584C11.122 6.90584 11.2527 6.8797 11.3746 6.82893C11.4964 6.77816 11.607 6.70377 11.7 6.61004L13 5.30004C13.7146 4.55635 14.6794 4.10387 15.7082 4.03C16.7369 3.95612 17.7565 4.26609 18.57 4.90004C19.0049 5.25584 19.36 5.69929 19.6122 6.2015C19.8643 6.70371 20.0077 7.25341 20.0332 7.81477C20.0587 8.37613 19.9656 8.93655 19.76 9.45953C19.5544 9.98251 19.2409 10.4563 18.84 10.85L17.42 12.28C17.3263 12.373 17.2519 12.4836 17.2011 12.6055C17.1503 12.7273 17.1242 12.858 17.1242 12.99C17.1242 13.122 17.1503 13.2528 17.2011 13.3746C17.2519 13.4965 17.3263 13.6071 17.42 13.7C17.513 13.7938 17.6236 13.8682 17.7454 13.9189C17.8673 13.9697 17.998 13.9958 18.13 13.9958C18.262 13.9958 18.3927 13.9697 18.5146 13.9189C18.6364 13.8682 18.747 13.7938 18.84 13.7L20.26 12.28C20.8642 11.6701 21.3318 10.9388 21.6321 10.1346C21.9323 9.33031 22.0582 8.47144 22.0015 7.61484C21.9447 6.75824 21.7067 5.92348 21.303 5.16583C20.8993 4.40818 20.3393 3.74494 19.66 3.22004Z' fill='black'/%3e%3c/svg%3e"},s=e=>{const{id:i,className:o,size:t,color:s,symbol:a}=e,c=r("folio-icon",`folio-icon--${t}`,`folio-icon--${s}`,o);return n("img",{alt:a,id:i,className:c,src:l[a]})};s.defaultProps={size:"6",color:"light",className:"",id:""};const a=i=>{const{onClick:o,color:t,size:l,disabled:s,children:a,icon:c,id:d}=i,m=r("folio-button",`folio-button--${t}`,`folio-button--${l}`,{"folio-button--disabled":s});return e("button",{disabled:s,type:"button",id:d,onClick:n=>{o&&o(n,i)},className:m,children:[c&&n("div",{className:"folio-button__icon",children:c}),a]})};a.defaultProps={color:"light",size:"medium",disabled:!1,id:"0",onClick:()=>null,icon:null};const c=e=>{const{classname:i,children:o,color:t,size:l}=e,s=r("folio-label",`folio-label--${t}`,`folio-label--${l}`,i);return n("div",{className:s,children:o})};c.defaultProps={classname:"",color:"light",size:"medium"};const d=n=>{switch(n){case"medium":default:return"4";case"large":return"7";case"small":return"2"}},m=(e,i,o)=>e.map(((e,t)=>n("div",{className:r("folio-tstack-item",`folio-tstack-item--${i}`,`folio-tstack-item-icon--${t}`,{"folio-tstack-item--disabled":null==o?void 0:o.includes(e)}),children:n(s,{size:d(i),symbol:e})},e))),f=e=>{const{className:i,size:o,type:t,icons:l,disable:s}=e,a=r("folio-tstack",`folio-tstack--${o}`,`folio-tstack--${t}`,i);return n("div",{className:a,children:m(l,o,s)})};f.defaultProps={disable:[],type:"grid",className:""};const h="small",p="Case Study",g="Github",u="Link",b="view more",C=160;const w=e=>e.map((e=>{const{src:i,alt:o}=e;return n("div",{className:"folio-project-media--img",children:n("img",{alt:o,src:i})},i)})),x=o=>{const{title:t,url:l,date:d,stack:m,disable:x,size:j,image:{src:k,alt:y},description:v,previews:z,buttonPress:N,category:L}=o,P=r("folio-project",`folio-project--${j}`);return e("div",{className:P,children:[e("div",{className:"folio-project-header",children:[n("div",{className:"folio-project-header--img",children:n("img",{alt:y,src:k})}),e("div",{className:"folio-project-header--detials",children:[n("div",{className:"folio-project-header--detials--title",children:t}),n("div",{className:"folio-project-header--detials--url",children:n("a",{href:"https://google.lk",children:l})}),n(c,{size:j,children:L}),n("div",{className:"folio-project-header--detials--date",children:d})]}),n("div",{className:"folio-project-header--stack",children:n(f,{icons:m||[],disable:x,size:j||h})})]}),n("div",{className:"folio-project-body",children:null==v?void 0:v.substring(0,C)}),e("div",{className:"folio-project-media",children:[z&&3===z.length&&w(z),z&&z.length>3&&e(i,{children:[w(z.slice(0,2)),e("button",{onClick:n=>{(null==N?void 0:N.onClickViewMore)&&N.onClickViewMore(n,o)},type:"button",className:"folio-project-media--button",children:[n("span",{className:"folio-project-media--button--count",children:z.length-2}),n("span",{className:"folio-project-media--button--text",children:b})]})]})]}),e("div",{className:"folio-project-footer",children:[n("div",{className:"folio-project-footer--button",children:n(a,{onClick:null==N?void 0:N.onClickCaseStudy,size:j,children:j===h?(M=p,M.split(" ")[0]):p})}),n("div",{className:"folio-project-footer--button",children:n(a,{onClick:null==N?void 0:N.onClickGithub,icon:n(s,{size:"3",symbol:"github"}),size:j,children:g})}),n("div",{className:"folio-project-footer--button",children:n(a,{onClick:null==N?void 0:N.onClickLink,icon:n(s,{size:"3",symbol:"link"}),size:j,children:u})})]})]});var M};x.defaultProps={stack:[],disable:[],size:h,description:"",previews:[],buttonPress:{onClickCaseStudy:()=>{},onClickGithub:()=>{},onClickLink:()=>{}},category:""};export{a as Button,s as Icon,c as Label,x as Project,f as TechStack};
//# sourceMappingURL=index.es.js.map
