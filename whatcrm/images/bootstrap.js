let e = null,
  t = null,
  n = null,
  o = !1;
const developmentMode = true;

var c = encodeURI("695b9093-7bfb-11ef-8741-5475513518d7");
const a = localStorage.getItem("mbf_data")
  ? JSON.parse(atob(localStorage.getItem("mbf_data")))
  : null,
  i = {
    phone: a ? a.phone : null,
    unique_id: a ? a.unique_code : null,
    license: a ? a.license : null,
  };
(t = i),
  (function () {
    let e =
      '<button type="button" aria-label="Close" class="mbf-ant-modal-close"><span class="ant-modal-close-x"><span role="img" aria-label="close" class="anticon anticon-close ant-modal-close-icon"><svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path></svg></span></span></button>';
    const t = new MutationObserver(() => {
      const c = document.querySelector(
        ".ant-popover-inner-content .custom-setting-menu"
      );
      if (c) {
        t.disconnect();
        const a = c.closest(".ant-popover").parentElement.parentElement;
        let i = a.querySelector(".ant-popover");
        a
          .querySelector(".ant-popover-content")
          .insertAdjacentHTML("afterbegin", e),
          a
            .querySelector(".mbf-ant-modal-close")
            .addEventListener("click", () => {
              i.classList.add("ant-popover-hidden");
            }),
          a.classList.add("full-screen");
        const s = a.querySelector(".custom-setting-menu-header div");
        (s.innerHTML = ""),
          (s.innerHTML =
            "<p>" + n.userDeviceData.device_data.skd_wa_no + "</p>");
        const l = document.querySelector(
          ".custom-setting-menu-items-layout .custom-setting-menu-item:nth-child(1)"
        ),
          r = l.cloneNode(!0);
        l.replaceWith(r),
          r.addEventListener("click", function () {
            !(function () {
              let e =
                '\n  <div id="modalLicense" class="modal">\n    <div class="modal-content">\n      <button class="close"></button>\n      \x3c!-- Start - Modal content --\x3e\n        <h1 class="modal-title">License Details</h1>\n        <p class="modal-description">Here you will find detailed information about your license</p>\n\n      <table class="user-info-table">\n        <tbody>\n          <tr>\n            <td><strong>User:</strong></td>\n            <td>' +
                n.userDeviceData.device_data.skd_wa_no +
                "</td>\n          </tr>\n          <tr>\n            <td><strong>Telephone:</strong></td>\n            <td>" +
                n.userDeviceData.device_data.skd_wa_no +
                "</td>\n          </tr>\n          <tr>\n            <td><strong>License:</strong></td>\n            <td>" +
                n.userDeviceData.skey +
                "</td>\n          </tr>\n          <tr>\n            <td><strong>Plan:</strong></td>\n            <td>" +
                n.userDeviceData.plan_type +
                "</td>\n          </tr>\n          <tr>\n            <td><strong>Next payment Date:</strong></td>\n            <td>" +
                n.userDeviceData.validate.end_date +
                '</td>\n          </tr>\n        </tbody>\n      </table>\n      <div class="modal-buttons" style="margin-top: 20px;" >\n       <button type="button" class="uninstall-button mbf_button ">Logout</button>\n        <button type="button" class="close-button mbf_button alterntive ">Close</button>\n      </div>\n      \x3c!-- End - Modal content --\x3e\n    </div>\n  </div>\n';
              document
                .querySelectorAll(".mbf-ant-modal-close")
                .forEach((e) => {
                  e.click();
                }),
                document.body.insertAdjacentHTML("beforeend", e);
              var t = document.getElementById("modalLicense"),
                c = t.querySelector(".close");
              const a = document.querySelector(".uninstall-button"),
                i = document.querySelector(".close-button");
              (t.style.display = "flex"),
                (c.onclick = function () {
                  (t.style.display = "none"), t.remove();
                }),
                (i.onclick = function () {
                  (t.style.display = "none"), t.remove();
                }),
                (a.onclick = async function () {
                  t.classList.add("loading");
                  const e = await (async function () {
                    try {
                      const e = { status: 200, message: "done" };
                      if (200 === e.status) {
                        return { success: !0, message: e.message };
                      }
                      return { success: !1, message: e.message };
                    } catch (e) {
                      return {
                        success: !1,
                        message: "Error",
                      };
                    }
                  })();
                  if (!e.success)
                    return (
                      t.classList.remove("loading"), alert(e.message), !1
                    );
                  (o = !1),
                    localStorage.removeItem("mbf_data"),
                    alert(e.message),
                    setTimeout(() => {
                      location.reload();
                    }, 500);
                }),
                (window.onclick = function (e) {
                  e.target == t && ((t.style.display = "none"), t.remove());
                });
            })();
          });
      }
    }),
      c = new MutationObserver(() => {
        const t = document.querySelector(
          ".ant-popover-inner-content .custom-advance-tools-menu"
        );
        if (t) {
          c.disconnect();
          const n = t.closest(".ant-popover").parentElement.parentElement;
          let o = n.querySelector(".ant-popover");
          n
            .querySelector(".ant-popover-content")
            .insertAdjacentHTML("afterbegin", e),
            n
              .querySelector(".mbf-ant-modal-close")
              .addEventListener("click", () => {
                o.classList.add("ant-popover-hidden");
              }),
            n.classList.add("full-screen");
        }
      });
    c.observe(document.body, { childList: !0, subtree: !0 });
    t.observe(document.body, { childList: !0, subtree: !0 });
  })(),
  (function () {
    const e = document.createElement("style");
    (e.id = "mbf-custom-style"),
      document.body.appendChild(e),
      (e.textContent =
        "\n\n  \n/*Inicio - Etiqeutas --------------------*/\n\n\nspan.top-tabbar-badge-class {\n    background:var(--custom-primary-color)!important;\n    color:white; \n}\n\n.dark span.top-tabbar-badge-class {\n    background: white !important;\n    color:black; \n}\n\n\n\n\n#main_section .main_toolbar .left_tab-side .ant-tabs-tab[data-node-key]:hover:after {\n  background:var(--custom-primary-color) !important;\n  border: 1px solid var(--custom-primary-color) !important;\n}\n\n/*Final - Etiqeutas --------------------*/\n\n");
  })(),
  (async function (e = "", t, n) {
    // const o = new URL("https://whatcrm.xyz/api/panouncement.php");
    const o = new URL("https://2way.in/api/extension/welcome.php");
    o.searchParams.append("action", "get_data"),
      o.searchParams.append("phone", t),
      o.searchParams.append("reseller_id", n),
      e && o.searchParams.append("key", e);
    try {
      const e = await fetch(o, { method: "GET" });
      if (!e.ok) throw new Error("HTTP error! status: " + e.status);
      // return await e.json();
      let resp = await e.json();
      console.log("1st response -->", resp);
      return resp;
    } catch (e) {
      throw (console.error("Error:", e), e);
    }
  })("", t.phone, c).then((c) => {
    (e = c.data),
      (function () {
        const t = new MutationObserver((t) => {
          for (let n of t)
            if ("childList" === n.type) {
              const t = document.querySelector(
                'img[src="https://wawf.app/wp-content/uploads/2022/12/WA-WorkFlow-logo-design-270x51-1.webp"]'
              );
              if (t) {
                t.src = e.logo.data.logo_image;
                const n = t.parentElement;
                n && n.classList.add("wraper-logo-tag");
              }
              if (document.querySelector(".ant-modal-root ul.ant-rate")) {
                const e = document.querySelector(".ant-modal-root");
                e && e.remove();
              }
            }
        }),
          n = { childList: !0, subtree: !0 };
        t.observe(document.body, n);
      })(),
      (function (e) {
        const t = new MutationObserver(function (n) {
          n.forEach(function (n) {
            "childList" === n.type &&
              n.addedNodes.forEach(function (n) {
                if (n.classList && n.classList.contains("main_toolbar")) {
                  let o;
                  t.disconnect(),
                    (n.style.opacity = 0),
                    (o = setInterval(() => {
                      const t = n.querySelector(
                        ".custom-product-logo-layout"
                      ),
                        c = n.querySelector(".left_tab-side"),
                        a = n.querySelector(".right_buttons-side");
                      t &&
                        c &&
                        a &&
                        (clearInterval(o), "function" == typeof e && e());
                    }, 100));
                }
              });
          });
        }),
          n = { childList: !0, subtree: !0 };
        t.observe(document.body, n);
      })(async () => {
        (function () {
          if (!localStorage.getItem("first_time")) {
            localStorage.setItem("first_time", !0);
            let o =
              '\n<div id="modalWelcome" class="modal">\n\n  <div class="modal-content">\n    <button class="close"></button>\n    \x3c!-- Start - Modal content --\x3e\n  \n    <h1 class="modal-title">' +
              e.welcome.title +
              '</h1>\n\n    <img class="welcome_image" src="' +
              e.welcome.image +
              '" alt="' +
              e.welcome.title +
              '" >\n\n\n     <div class="modal-description">\n     ' +
              e.welcome.description +
              '\n  </div>\n \n\n  <div class="modal-buttons" style="margin-top: 20px;" >\n       <a href="' +
              e.welcome.button.link.url +
              '" target="_blank" class="mbf_button">' +
              e.welcome.button.link.title +
              '</a>\n        <button type="button" class="close-button mbf_button ">Close</button>\n      </div>\n \n\n    \x3c!-- End - Modal content --\x3e\n  </div>\n</div>\n ';
            document.body.insertAdjacentHTML("beforeend", o);
            var t = document.getElementById("modalWelcome"),
              n = t.querySelector(".close");
            const c = document.querySelector(".close-button");
            (t.style.display = "flex"),
              (n.onclick = function () {
                (t.style.display = "none"), t.remove();
              }),
              (c.onclick = function () {
                (t.style.display = "none"), t.remove();
              }),
              (window.onclick = function (e) {
                e.target == t && ((t.style.display = "none"), t.remove());
              });
          }
        })();
        let c = document.querySelector("#mbf_loading");
        var i;
        if (
          ((t.phone && t.unique_id) || location.reload(),
            console.log("Datos de licencia", t),
            (i = setInterval(function () {
              if (Boolean(document.querySelector(".two._aigs"))) {
                clearInterval(i);
                const c = document.querySelector("._aigs > header"),
                  a =
                    '\n      <div class="mbf-sidebar">\n        <a class="logo" href="' +
                    e.logo.data.logo_link +
                    '"  target="_blank">\n            <img src="' +
                    e.logo.data.logo_image +
                    '" alt="Logo de la empresa">\n        </a>\n        <div class="mbf-buttons">\n          ' +
                    e.buttons.data
                      .map(
                        (e) =>
                          '\n            <div id="' +
                          e.id +
                          '" class="btn-item">\n                <div class="btn-item-img">\n                    <img class="wc-user-img" src="' +
                          e.icon +
                          '">\n                </div>\n                <div class="btn-item-info">\n                    <strong class="btn-item-info-title">' +
                          e.title +
                          '</strong>\n                    <p class="btn-item-info-subtitle">' +
                          e.sub_title +
                          "</p>\n                </div>\n            </div>\n          "
                      )
                      .join("") +
                    "\n        </div>\n      </div>\n    ";
                c.insertAdjacentHTML("afterbegin", a),
                  [
                    { id: "sending_messages", index: 1 },
                    { id: "lists", index: 2 },
                    { id: "templates", index: 3 },
                    { id: "workflow", index: 4 },
                    { id: "schedule_messages", index: 5 },
                    { id: "scheduled_shipments", index: 6 },
                    { id: "notes", index: 7 },
                    { id: "reminder", index: 8 },
                    { id: "kanban_board", index: 9 },
                    { id: "functions", index: 10 },
                    { id: "tools_free", index: 11 },
                    { id: "user", index: 12 },
                  ].forEach((c) => {
                    const a = document.querySelector("#" + c.id);
                    a &&
                      a.addEventListener("click", () => {
                        !1 === o
                          ? (function () {
                            let c =
                              '\n<div id="modalPrice" class="modal">\n\n  <div class="modal-content">\n    <button class="close"></button>\n    \x3c!-- Start - Modal content --\x3e\n  \n    <h1 class="modal-title">Choose your Plan</h1>\n <div class="modal-description">\n If you have a license, click here to Enter your Key: <a href="#" class="open-insert-key">Insert License key</a>\n  </div>\n\n  <div class="toggle-price">\n    <input type="checkbox" id="toggle" class="toggle-checkbox" />\n    <label for="toggle" class=\'toggle-container\'>\n      <div>Monthly Plan</div>   \n      <div>Yearly Plan</div>\n    </label>\n  </div>\n\n \n\n\n  <div class="carousel-container">\n  <button class="carousel-btn left-btn">←</button>\n  <ul>\n        ' +
                              e.table_price.map(
                                (e) =>
                                  '<li class="subscription"> \n                  \n                        <div class="subscription_header">\n                          <h2 class="subscription_header_title">' +
                                  e.title +
                                  "</h2>\n                    " +
                                  ("-" === e.description
                                    ? '<div class="subscription_header_description">' +
                                    e.description +
                                    "</div>"
                                    : "") +
                                  '\n                        </div>\n                        <div class="subscription_content">\n                           <ul class="subscription_feature">\n                              ' +
                                  e.features.join("") +
                                  '\n                          </ul>\n                          <div class="subscription_price">\n                            <span class="subscription_price_old">*</span>\n                            <span class="subscription_price_current">*</span>\n                          </div>\n                        </div>\n                         <div class="subscription_footer">\n                             <a class="mbf_button" onclick="' +
                                  plan_buy(e.id) +
                                  '" target="_blank">buy</a>\n                        </div>\n \n                    </li>'
                              ) +
                              '\n         </ul>\n        <button class="carousel-btn right-btn">→</button>\n</div>\n\n    \x3c!-- End - Modal content --\x3e\n  </div>\n</div>\n ';
                            document.body.insertAdjacentHTML("beforeend", c);
                            var a = document.getElementById("modalPrice"),
                              i = a.querySelector(".close");
                            (a.style.display = "flex"),
                              (i.onclick = function () {
                                (a.style.display = "none"), a.remove();
                              }),
                              (window.onclick = function (e) {
                                e.target == a &&
                                  ((a.style.display = "none"), a.remove());
                              });
                            const s = document.querySelector(
                              ".carousel-container ul"
                            ),
                              r = document.querySelector(
                                ".carousel-container .left-btn"
                              ),
                              d = document.querySelector(
                                ".carousel-container .right-btn"
                              ),
                              u = document.querySelectorAll(
                                ".carousel-container  li.subscription"
                              ),
                              m = document.querySelector(".toggle-price input"),
                              p = document.querySelector(".open-insert-key");
                            function b() {
                              const e = u[0].clientWidth,
                                t = s.scrollLeft,
                                n = Math.round(t / e);
                              return console.log("Índice actual:", n), n;
                            }
                            function y() {
                              const t = b(),
                                n = document.querySelector(
                                  ".carousel-container  ul"
                                ).children[t];
                              let o = e.table_price[b()];
                              0 === o.variations.length
                                ? (document
                                  .querySelector(".toggle-price")
                                  .classList.add("disabled"),
                                  null === o.old_price
                                    ? ((n.querySelector(
                                      ".subscription_price_old"
                                    ).style.display = "none"),
                                      (n.querySelector(
                                        ".subscription_price_current"
                                      ).innerHTML = o.regular_price))
                                    : ((n.querySelector(
                                      ".subscription_price_old"
                                    ).style.display = "inline"),
                                      (n.querySelector(
                                        ".subscription_price_current"
                                      ).style.display = "inline"),
                                      (n.querySelector(
                                        ".subscription_price_old"
                                      ).innerHTML = o.old_price),
                                      (n.querySelector(
                                        ".subscription_price_current"
                                      ).innerHTML = o.regular_price)))
                                : (document
                                  .querySelector(".toggle-price")
                                  .classList.remove("disabled"),
                                  m.checked
                                    ? null === o.variations[1].old_price
                                      ? ((n.querySelector(
                                        ".subscription_price_old"
                                      ).style.display = "none"),
                                        (n.querySelector(
                                          ".subscription_price_current"
                                        ).innerHTML =
                                          o.variations[1].regular_price))
                                      : ((n.querySelector(
                                        ".subscription_price_old"
                                      ).style.display = "inline"),
                                        (n.querySelector(
                                          ".subscription_price_old"
                                        ).innerHTML =
                                          o.variations[1].old_price),
                                        (n.querySelector(
                                          ".subscription_price_current"
                                        ).innerHTML =
                                          o.variations[1].regular_price))
                                    : null === o.variations[0].old_price
                                      ? ((n.querySelector(
                                        ".subscription_price_old"
                                      ).style.display = "none"),
                                        (n.querySelector(
                                          ".subscription_price_current"
                                        ).innerHTML =
                                          o.variations[0].regular_price))
                                      : ((n.querySelector(
                                        ".subscription_price_old"
                                      ).style.display = "inline"),
                                        (n.querySelector(
                                          ".subscription_price_old"
                                        ).innerHTML =
                                          o.variations[0].old_price),
                                        (n.querySelector(
                                          ".subscription_price_current"
                                        ).innerHTML =
                                          o.variations[0].regular_price)));
                            }
                            r.addEventListener("click", () => {
                              (s.scrollLeft -= s.clientWidth),
                                setTimeout(() => {
                                  y();
                                }, 100);
                            }),
                              d.addEventListener("click", () => {
                                (s.scrollLeft += s.clientWidth),
                                  setTimeout(() => {
                                    y();
                                  }, 100);
                              }),
                              m.addEventListener("change", function () {
                                y();
                              }),
                              p.addEventListener("click", (e) => {
                                e.preventDefault(),
                                  (a.style.display = "none"),
                                  a.remove(),
                                  (function () {
                                    let e =
                                      '\n<div id="modalPrice" class="modal">\n\n  <div class="modal-content">\n    <button class="close"></button>\n    \x3c!-- Start - Modal content --\x3e\n  \n    <h1 class="modal-title">You must have Valid & Active License Key</h1>\n    <div class="modal-description">\n      Enter your license key & click on Activate to Activate your License Key.\n    </div>\n\n    <div class="toggle-price">\n        <input type="text" class="mbf_input_text" style="margin-bottom:20px;"/>\n        <div class="mbf_button"  >Activate Now</div>\n    </div>\n\n    \x3c!-- End - Modal content --\x3e\n  </div>\n</div>\n ';
                                    document.body.insertAdjacentHTML(
                                      "beforeend",
                                      e
                                    );
                                    var c =
                                      document.getElementById("modalPrice"),
                                      a = c.querySelector(".close");
                                    (c.style.display = "flex"),
                                      (a.onclick = function () {
                                        (c.style.display = "none"), c.remove();
                                      }),
                                      (window.onclick = function (e) {
                                        e.target == c &&
                                          ((c.style.display = "none"),
                                            c.remove());
                                      });
                                    const i =
                                      document.querySelector(".mbf_input_text");
                                    document
                                      .querySelector(".mbf_button")
                                      .addEventListener("click", async () => {
                                        if ("" === i.value)
                                          alert("License Blank");
                                        else {
                                          c.classList.add("loading");
                                          const e = await l(
                                            t.unique_id,
                                            t.phone,
                                            i.value
                                          );
                                          if (e.success) {
                                            c.classList.remove("loading");
                                            const t = {
                                              type: "ON_FETCH_REMOTE_DATA",
                                              response: "",
                                              extraData: {},
                                            };
                                            (t.extraData.type =
                                              "validate_device"),
                                              (t.extraData.mbf = !0),
                                              window.postMessage(t, "*"),
                                              (c.style.display = "none"),
                                              c.remove(),
                                              (o = !0),
                                              (n = e.data),
                                              (function (e) {
                                                const t = "mbf_data";
                                                function n(e) {
                                                  return btoa(
                                                    JSON.stringify(e)
                                                  );
                                                }
                                                function o(e) {
                                                  return JSON.parse(atob(e));
                                                }
                                                let c = null;
                                                try {
                                                  const e =
                                                    localStorage.getItem(t);
                                                  c = e ? o(e) : null;
                                                } catch (e) { }
                                                c
                                                  ? (c.license = e)
                                                  : (c = { license: e });
                                                try {
                                                  localStorage.setItem(t, n(c));
                                                } catch (e) { }
                                              })(i.value);
                                            const a =
                                              "Hello " +
                                              n.userDeviceData.device_data
                                                .skd_wa_no +
                                              ', your license on CRM from the plan "' +
                                              n.userDeviceData.plan_type +
                                              '" Is Active Now. Your next payment is scheduled for ' +
                                              n.userDeviceData.validate
                                                .end_date +
                                              ". Thank you for Choosing CRM! Visit https://www.google.com// to checkout Our Other Serivices! ";
                                            alert(a);
                                          } else
                                            c.classList.remove("loading"),
                                              (i.value = ""),
                                              i.focus(),
                                              alert(e.message);
                                        }
                                      });
                                  })();
                              }),
                              y();
                          })()
                          : document
                            .querySelector(
                              ".main_toolbar > .right_buttons-side > div > div > .ant-space-item:nth-child(" +
                              c.index +
                              ")"
                            )
                            .querySelector("button")
                            .click();
                      });
                  });
              }
            }, 50)),
            t.license && "" !== t.license)
        ) {
          const c = await l(t.unique_id, t.phone, t.license);
          if (c.success) {
            !(function () {
              if (new Date().getDate() === Number(e.promotion.day)) {
                let o = localStorage.getItem("list_promotions");
                o
                  ? (o = JSON.parse(o))
                  : ((o = []),
                    localStorage.setItem("list_promotions", JSON.stringify(o)));
                let c = e.promotion.code;
                if (!o.includes(c)) {
                  o.push(c),
                    localStorage.setItem("list_promotions", JSON.stringify(o));
                  let a =
                    '\n<div id="modalPromotion" class="modal">\n\n  <div class="modal-content">\n    <button class="close"></button>\n    \x3c!-- Start - Modal content --\x3e\n  \n    <h1 class="modal-title">Promociones</h1>\n \n  <div class="carousel-container">\n  <button class="carousel-btn left-btn">←</button>\n  <ul>\n        ' +
                    e.promotion.slider.map(
                      (e) =>
                        '<li class="promotion"> \n                    <a href="' +
                        e.link +
                        '" target="_blank">\n                          <img src="' +
                        e.image +
                        '" alt="' +
                        e.title +
                        '" class="promotion_image">\n                      </a> \n                    </li>'
                    ) +
                    '\n         </ul>\n        <button class="carousel-btn right-btn">→</button>\n</div>\n\n    \x3c!-- End - Modal content --\x3e\n  </div>\n</div>\n ';
                  document.body.insertAdjacentHTML("beforeend", a);
                  var t = document.getElementById("modalPromotion"),
                    n = t.querySelector(".close");
                  (t.style.display = "flex"),
                    (n.onclick = function () {
                      (t.style.display = "none"), t.remove();
                    }),
                    (window.onclick = function (e) {
                      e.target == t && ((t.style.display = "none"), t.remove());
                    });
                  const i = document.querySelector(".carousel-container ul"),
                    s = document.querySelector(".carousel-container .left-btn"),
                    l = document.querySelector(
                      ".carousel-container .right-btn"
                    ),
                    r = document.querySelectorAll(
                      ".carousel-container  li.subscription"
                    );
                  function d() {
                    const e = r[0].clientWidth,
                      t = i.scrollLeft,
                      n = Math.round(t / e);
                    return console.log("Índice actual:", n), n;
                  }
                  s.addEventListener("click", () => {
                    (i.scrollLeft -= i.clientWidth),
                      setTimeout(() => {
                        d();
                      }, 100);
                  }),
                    l.addEventListener("click", () => {
                      (i.scrollLeft += i.clientWidth),
                        setTimeout(() => {
                          d();
                        }, 100);
                    });
                }
              }
            })(),
              (o = !0),
              (n = c.data),
              console.log("Datos de del usuario:", n);
            const t = {
              type: "ON_FETCH_REMOTE_DATA",
              response: "",
              extraData: {},
            };
            (t.extraData.type = "validate_device"),
              (t.extraData.mbf = !0),
              window.postMessage(t, "*");
          } else
            a &&
              a.license &&
              (delete a.license,
                localStorage.setItem("mbf_data", btoa(JSON.stringify(a)))),
              (function () {
                let t =
                  '\n  <div id="modalPrice" class="modal">\n  \n    <div class="modal-content">\n      <button class="close"></button>\n      \x3c!-- Start - Modal content --\x3e\n    \n      <img class="expired_image" src="' +
                  e.expired.image +
                  '" alt="' +
                  e.expired.title +
                  '" >\n  \n  <div class="expired_description">' +
                  e.expired.description +
                  '</div>\n  \n  <a href="' +
                  e.expired.button.link +
                  '" target="_blank" class="btn-swal expired_button swal2-styled swal2-default-outline">' +
                  e.expired.button.title +
                  '</a>\n      <div class="modal-buttons"  >\n  <button type="button" class="expired_button mbf_button">Close</button>\n  </div>\n      \x3c!-- End - Modal content --\x3e\n    </div>\n  </div>\n   ';
                document.body.insertAdjacentHTML("beforeend", t);
                var n = document.getElementById("modalPrice"),
                  o = n.querySelector(".close");
                const c = document.querySelector(".mbf_button");
                (n.style.display = "flex"),
                  (o.onclick = function () {
                    (n.style.display = "none"), n.remove();
                  }),
                  (c.onclick = function () {
                    (n.style.display = "none"), n.remove();
                  }),
                  (window.onclick = function (e) {
                    e.target == n && ((n.style.display = "none"), n.remove());
                  });
              })();
        }
        c.remove(), (document.querySelector(".main_toolbar").style.opacity = 1);
      });
  });
var s = setInterval(function () {
  Boolean(document.getElementById("pane-side")) &&
    e &&
    (clearInterval(s),
      (function () {
        let t =
          '\n    <div id="mbf_loading">\n\t<div>\n      <h1>' +
          e.loading.loading_title +
          '</h1>\n      <img src="' +
          e.loading.loading_image +
          '" alt="Loading" />\n      <p>\n        ' +
          e.loading.loading_title_description +
          "\n      </p>\n\t   </div>\n    </div>\n    ";
        document.body.insertAdjacentHTML("beforeend", t),
          console.log("Loading the program");
      })());
}, 50);
async function l(e, t, n, o) {
  const c =
    "https://2way.in/api/extension/license.php?" +
    new URLSearchParams({
      unique_id: e,
      phone: t,
      license: n,
      // reseller_id: o,
    }).toString();
  try {
    console.log(c);
    const e = await fetch(c, { method: "GET" }),
      t = await e.json();
    console.log("insert license-->", t);
    if (200 === t.status) {
      return { success: !0, message: t.message, data: t.dData };
    }
    return { success: !1, message: t.message };
  } catch (e) {
    return { success: !1, message: "Network or Server error" };
  }
}
function r(e) {
  function t(e) {
    if ("string" == typeof e)
      return function (e) { }.constructor("while (true) {}").apply("counter");
    1 !== ("" + e / e).length || e % 20 == 0
      ? function () {
        return !0;
      }
        .constructor("debugger")
        .call("action")
      : function () {
        return !1;
      }
        .constructor("debugger")
        .apply("stateObject"),
      t(++e);
  }
  try {
    if (e) return t;
    t(0);
  } catch (e) { }
}
!(function () {
  let e;
  try {
    e = Function('return (function() {}.constructor("return this")( ));')();
  } catch (t) {
    e = window;
  }
  e.setInterval(r, 4e3);
})();

// Ensure jQuery is loaded before using $
(function () {
  function loadjQuery(callback) {
    if (typeof jQuery === "undefined") {
      var script = document.createElement("script");
      script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
      script.type = "text/javascript";
      script.onload = function () {
        console.log("jQuery loaded successfully");
        if (callback) callback();
      };
      document.getElementsByTagName("head")[0].appendChild(script);
    } else {
      if (callback) callback();
    }
  }

  // Define the function globally so it can be accessed from inline HTML
  window.plan_buy = function (plan_id) {
    if (typeof jQuery === "undefined") {
      console.error("jQuery is not loaded!");
      return;
    }

    $.ajax({
      url: "https://2way.in/api/extension/plan_buy.php",
      method: "POST",
      data: { plan_id: plan_id },
      success: function (data) {
        console.log("Plan Buy Response:", data);
      },
      error: function (xhr, status, error) {
        console.error("AJAX Error:", error);
      }
    });
  };

  // Load jQuery first to avoid $ is not defined error
  loadjQuery();
})();
