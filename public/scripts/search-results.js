var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
import { renderBlock } from "./lib.js";
export function renderSearchStubBlock() {
  renderBlock(
    "search-results-block",
    '\n    <div class="before-results-block">\n      <img src="img/start-search.png" />\n      <p>\u0427\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u043F\u043E\u0438\u0441\u043A, \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443 \u0438&nbsp;\u043D\u0430\u0436\u043C\u0438\u0442\u0435 "\u041D\u0430\u0439\u0442\u0438"</p>\n    </div>\n    '
  );
}
export function toggleFavoriteItem(data) {
  var _a;
  var itemsData = localStorage.getItem("favoriteItems");
  var items = typeof itemsData === "string" ? JSON.parse(itemsData) : undefined;
  if (inFavorite(data)) {
    console.log(data);
  } else {
    var store = {};
    if (items && items.length > 0) {
      Object.assign(
        store,
        __assign(
          __assign({}, items),
          ((_a = {}),
          (_a[items.length] = {
            id: data.id,
            name: data.name,
            image: data.image,
          }),
          _a)
        )
      );
    } else {
      Object.assign(store, {
        0: { id: data.id, name: data.name, image: data.image },
      });
    }
    localStorage.setItem("favoriteItems", JSON.stringify(store));
  }
  //getFormData();
}
export function inFavorite(data) {
  var itemsData = localStorage.getItem("favoriteItems");
  var items = typeof itemsData === "string" ? JSON.parse(itemsData) : undefined;
  if (items && items.length > 0) {
    return !!items.find(function (item) {
      return item.id == data.id;
    });
  }
  return false;
}
export function renderEmptyOrErrorSearchBlock(reasonMessage) {
  renderBlock(
    "search-results-block",
    '\n    <div class="no-results-block">\n      <img src="img/no-results.png" />\n      <p>'.concat(
      reasonMessage,
      "</p>\n    </div>\n    "
    )
  );
}
export function renderSearchResultsBlock(data) {
  var result = data.map(function (item) {
    var classStr;
    inFavorite(item) ? (classStr = "active") : (classStr = "");
    return '<li class="result">\n    <div class="result-container">\n      <div class="result-img-container">\n        <div class="favorites '
      .concat(classStr, '"></div>\n        <img class="result-img" src="')
      .concat(item.image, '" alt="')
      .concat(
        item.name,
        '">\n      </div>\t\n      <div class="result-info">\n        <div class="result-info--header">\n          <p>'
      )
      .concat(item.name, '</p>\n          <p class="price">')
      .concat(
        item.price,
        '&#8381;</p>\n        </div>\n        <div class="result-info--map"><i class="map-icon"></i> '
      )
      .concat(
        item.remoteness,
        '\u043A\u043C \u043E\u0442 \u0432\u0430\u0441</div>\n        <div class="result-info--descr">'
      )
      .concat(
        item.description,
        '</div>\n        <div class="result-info--footer">\n          <div>\n            <button>\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </li>'
      );
  });
  renderBlock(
    "search-results-block",
    '\n    <div class="search-results-header">\n        <p>\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E\u0438\u0441\u043A\u0430</p>\n        <div class="search-results-filter">\n            <span><i class="icon icon-filter"></i> \u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C:</span>\n            <select>\n                <option selected="">\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u0435\u0448\u0451\u0432\u044B\u0435</option>\n                <option selected="">\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0440\u043E\u0433\u0438\u0435</option>\n                <option>\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0431\u043B\u0438\u0436\u0435</option>\n            </select>\n        </div>\n    </div>\n    <ul class="results-list">\n      '.concat(
      result.reduce(function (sum, current) {
        return sum + current;
      }, ""),
      "\n    </ul>\n    "
    )
  );
  document.querySelectorAll(".result .favorites").forEach(function (item, idx) {
    item.addEventListener("click", function () {
      toggleFavoriteItem(data[idx]);
    });
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLXJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR3ZDLE1BQU0sVUFBVSxxQkFBcUI7SUFDbkMsV0FBVyxDQUNULHNCQUFzQixFQUN0Qiw0WUFLQyxDQUNGLENBQUM7QUFDSixDQUFDO0FBUUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLElBQVc7O0lBQzVDLElBQU0sU0FBUyxHQUFZLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDakUsSUFBTSxLQUFLLEdBQ1QsT0FBTyxTQUFTLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDcEUsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuQjtTQUFNO1FBQ0wsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyx3QkFDZCxLQUFLLGdCQUNQLEtBQUssQ0FBQyxNQUFNLElBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUNuRSxDQUFDO1NBQ0o7YUFBTTtZQUNMLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUNuQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTthQUN2RCxDQUFDLENBQUM7U0FDSjtRQUNELFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUM5RDtJQUNELGdCQUFnQjtBQUNsQixDQUFDO0FBQ0QsTUFBTSxVQUFVLFVBQVUsQ0FBQyxJQUFXO0lBQ3BDLElBQU0sU0FBUyxHQUFZLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDakUsSUFBTSxLQUFLLEdBQ1QsT0FBTyxTQUFTLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDcEUsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDN0IsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQWM7WUFDMUMsT0FBTyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxhQUFxQjtJQUNqRSxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCLHFHQUdPLGFBQWEsMkJBRW5CLENBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsd0JBQXdCLENBQUMsSUFBYTtJQUNwRCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBVztRQUNsQyxJQUFJLFFBQWdCLENBQUM7UUFDckIsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDM0QsT0FBTyxrSkFHcUIsUUFBUSxnRUFDRCxJQUFJLENBQUMsS0FBSyxzQkFBVSxJQUFJLENBQUMsSUFBSSwrSEFJckQsSUFBSSxDQUFDLElBQUksZ0RBQ0ssSUFBSSxDQUFDLEtBQUssNkdBRTBCLElBQUksQ0FBQyxVQUFVLDJHQUN0QyxJQUFJLENBQUMsV0FBVywyUEFRbEQsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBRUgsV0FBVyxDQUNULHNCQUFzQixFQUN0QixpMEJBYUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxPQUFPLElBQUssT0FBQSxHQUFHLEdBQUcsT0FBTyxFQUFiLENBQWEsRUFBRSxFQUFFLENBQUMsc0JBRXJELENBQ0YsQ0FBQztJQUNGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxHQUFHO1FBQ2hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDN0Isa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJztcbmltcG9ydCB7IFBsYWNlLCBnZXRGb3JtRGF0YSB9IGZyb20gJy4vc2VhcmNoLWZvcm0uanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoU3R1YkJsb2NrKCkge1xuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLXJlc3VsdHMtYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiYmVmb3JlLXJlc3VsdHMtYmxvY2tcIj5cbiAgICAgIDxpbWcgc3JjPVwiaW1nL3N0YXJ0LXNlYXJjaC5wbmdcIiAvPlxuICAgICAgPHA+0KfRgtC+0LHRiyDQvdCw0YfQsNGC0Ywg0L/QvtC40YHQuiwg0LfQsNC/0L7Qu9C90LjRgtC1INGE0L7RgNC80YMg0LgmbmJzcDvQvdCw0LbQvNC40YLQtSBcItCd0LDQudGC0LhcIjwvcD5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICk7XG59XG5cbmludGVyZmFjZSBGYXZvcml0ZSB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUZhdm9yaXRlSXRlbShkYXRhOiBQbGFjZSk6IHZvaWQge1xuICBjb25zdCBpdGVtc0RhdGE6IHVua25vd24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVJdGVtcycpO1xuICBjb25zdCBpdGVtcyA9XG4gICAgdHlwZW9mIGl0ZW1zRGF0YSA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKGl0ZW1zRGF0YSkgOiB1bmRlZmluZWQ7XG4gIGlmIChpbkZhdm9yaXRlKGRhdGEpKSB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3RvcmUgPSB7fTtcbiAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihzdG9yZSwge1xuICAgICAgICAuLi5pdGVtcyxcbiAgICAgICAgW2l0ZW1zLmxlbmd0aF06IHsgaWQ6IGRhdGEuaWQsIG5hbWU6IGRhdGEubmFtZSwgaW1hZ2U6IGRhdGEuaW1hZ2UgfSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3QuYXNzaWduKHN0b3JlLCB7XG4gICAgICAgIDA6IHsgaWQ6IGRhdGEuaWQsIG5hbWU6IGRhdGEubmFtZSwgaW1hZ2U6IGRhdGEuaW1hZ2UgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmF2b3JpdGVJdGVtcycsIEpTT04uc3RyaW5naWZ5KHN0b3JlKSk7XG4gIH1cbiAgLy9nZXRGb3JtRGF0YSgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluRmF2b3JpdGUoZGF0YTogUGxhY2UpOiBib29sZWFuIHtcbiAgY29uc3QgaXRlbXNEYXRhOiB1bmtub3duID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlSXRlbXMnKTtcbiAgY29uc3QgaXRlbXMgPVxuICAgIHR5cGVvZiBpdGVtc0RhdGEgPT09ICdzdHJpbmcnID8gSlNPTi5wYXJzZShpdGVtc0RhdGEpIDogdW5kZWZpbmVkO1xuICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAhIWl0ZW1zLmZpbmQoZnVuY3Rpb24gKGl0ZW06IEZhdm9yaXRlKSB7XG4gICAgICByZXR1cm4gaXRlbS5pZCA9PSBkYXRhLmlkO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckVtcHR5T3JFcnJvclNlYXJjaEJsb2NrKHJlYXNvbk1lc3NhZ2U6IHN0cmluZykge1xuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLXJlc3VsdHMtYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwibm8tcmVzdWx0cy1ibG9ja1wiPlxuICAgICAgPGltZyBzcmM9XCJpbWcvbm8tcmVzdWx0cy5wbmdcIiAvPlxuICAgICAgPHA+JHtyZWFzb25NZXNzYWdlfTwvcD5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hSZXN1bHRzQmxvY2soZGF0YTogUGxhY2VbXSk6IHZvaWQge1xuICBjb25zdCByZXN1bHQgPSBkYXRhLm1hcCgoaXRlbTogUGxhY2UpID0+IHtcbiAgICBsZXQgY2xhc3NTdHI6IHN0cmluZztcbiAgICBpbkZhdm9yaXRlKGl0ZW0pID8gKGNsYXNzU3RyID0gJ2FjdGl2ZScpIDogKGNsYXNzU3RyID0gJycpO1xuICAgIHJldHVybiBgPGxpIGNsYXNzPVwicmVzdWx0XCI+XG4gICAgPGRpdiBjbGFzcz1cInJlc3VsdC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW1nLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmF2b3JpdGVzICR7Y2xhc3NTdHJ9XCI+PC9kaXY+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJyZXN1bHQtaW1nXCIgc3JjPVwiJHtpdGVtLmltYWdlfVwiIGFsdD1cIiR7aXRlbS5uYW1lfVwiPlxuICAgICAgPC9kaXY+XHRcbiAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWhlYWRlclwiPlxuICAgICAgICAgIDxwPiR7aXRlbS5uYW1lfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cInByaWNlXCI+JHtpdGVtLnByaWNlfSYjODM4MTs8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLW1hcFwiPjxpIGNsYXNzPVwibWFwLWljb25cIj48L2k+ICR7aXRlbS5yZW1vdGVuZXNzfdC60Lwg0L7RgiDQstCw0YE8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1kZXNjclwiPiR7aXRlbS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1mb290ZXJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbj7Ql9Cw0LHRgNC+0L3QuNGA0L7QstCw0YLRjDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2xpPmA7XG4gIH0pO1xuXG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0cy1oZWFkZXJcIj5cbiAgICAgICAgPHA+0KDQtdC30YPQu9GM0YLQsNGC0Ysg0L/QvtC40YHQutCwPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXJlc3VsdHMtZmlsdGVyXCI+XG4gICAgICAgICAgICA8c3Bhbj48aSBjbGFzcz1cImljb24gaWNvbi1maWx0ZXJcIj48L2k+INCh0L7RgNGC0LjRgNC+0LLQsNGC0Yw6PC9zcGFuPlxuICAgICAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwiXCI+0KHQvdCw0YfQsNC70LAg0LTQtdGI0ZHQstGL0LU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwiXCI+0KHQvdCw0YfQsNC70LAg0LTQvtGA0L7Qs9C40LU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPtCh0L3QsNGH0LDQu9CwINCx0LvQuNC20LU8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8dWwgY2xhc3M9XCJyZXN1bHRzLWxpc3RcIj5cbiAgICAgICR7cmVzdWx0LnJlZHVjZSgoc3VtLCBjdXJyZW50KSA9PiBzdW0gKyBjdXJyZW50LCAnJyl9XG4gICAgPC91bD5cbiAgICBgXG4gICk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN1bHQgLmZhdm9yaXRlcycpLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0b2dnbGVGYXZvcml0ZUl0ZW0oZGF0YVtpZHhdKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iXX0=
