import {
  renderBlock,
  getISODate,
  getLastDayOfMonth,
  dateToUnixStamp,
  responseToJson,
} from "./lib.js";
import { renderSearchResultsBlock } from "./search-results.js";
export function getFormData() {
  var form = document.getElementById("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var city = document.getElementById("city"),
      checkin = document.getElementById("check-in-date"),
      checkout = document.getElementById("check-out-date"),
      maxprice = document.getElementById("max-price"),
      coordinates = document.getElementById("coordinates");
    var data = {
      city: city.value,
      checkin: new Date(checkin.value),
      checkout: new Date(checkout.value),
      maxprice: maxprice.value ? +maxprice.value : null,
      coordinates: coordinates.value,
    };
    search(data).then(function (places) {
      return renderSearchResultsBlock(places);
    });
  });
}
function search(data) {
  var url =
    "http://localhost:3030/places?" +
    "checkInDate=".concat(dateToUnixStamp(data.checkin), "&") +
    "checkOutDate=".concat(dateToUnixStamp(data.checkout), "&") +
    "coordinates=".concat(data.coordinates);
  if (data.maxprice != null) {
    url += "&maxPrice=".concat(data.maxprice);
  }
  return responseToJson(fetch(url));
}
export function renderSearchFormBlock(checkin, checkout) {
  if (checkin === void 0) {
    checkin = "";
  }
  if (checkout === void 0) {
    checkout = "";
  }
  var minDate = new Date(),
    maxDate = new Date(),
    checkinDefaultDate = new Date(),
    checkoutDefaultDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 1);
  maxDate.setDate(getLastDayOfMonth(maxDate.getFullYear(), maxDate.getMonth()));
  checkinDefaultDate.setDate(checkinDefaultDate.getDate() + 1);
  checkoutDefaultDate.setDate(checkoutDefaultDate.getDate() + 3);
  renderBlock(
    "search-form-block",
    '\n    <form id="form">\n      <fieldset class="search-filedset">\n        <div class="row">\n          <div>\n            <label for="city">\u0413\u043E\u0440\u043E\u0434</label>\n            <input id="city" name="city" type="text" disabled value="\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433" />\n            <input type="hidden" id="coordinates" name="coordinates" disabled value="59.9386,30.3141" />\n          </div>\n          <!--<div class="providers">\n            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>\n            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>\n          </div>--!>\n        </div>\n        <div class="row">\n          <div>\n            <label for="check-in-date">\u0414\u0430\u0442\u0430 \u0437\u0430\u0435\u0437\u0434\u0430</label>\n            <input id="check-in-date" type="date" value="'
      .concat(checkin ? checkin : getISODate(checkinDefaultDate), '" min="')
      .concat(getISODate(minDate), '" max="')
      .concat(
        getISODate(maxDate),
        '" name="checkin" />\n          </div>\n          <div>\n            <label for="check-out-date">\u0414\u0430\u0442\u0430 \u0432\u044B\u0435\u0437\u0434\u0430</label>\n            <input id="check-out-date" type="date" value="'
      )
      .concat(checkout ? checkout : getISODate(checkoutDefaultDate), '" min="')
      .concat(getISODate(minDate), '" max="')
      .concat(
        getISODate(maxDate),
        '" name="checkout" />\n          </div>\n          <div>\n            <label for="max-price">\u041C\u0430\u043A\u0441. \u0446\u0435\u043D\u0430 \u0441\u0443\u0442\u043E\u043A</label>\n            <input id="max-price" type="text" value="" name="price" class="max-price" />\n          </div>\n          <div>\n            <div><button>\u041D\u0430\u0439\u0442\u0438</button></div>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n    '
      )
  );
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFdBQVcsRUFDWCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixjQUFjLEdBQ2YsTUFBTSxVQUFVLENBQUM7QUFDbEIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFtQi9ELE1BQU0sVUFBVSxXQUFXO0lBQ3pCLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFvQixDQUFDO0lBQ2hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFjO1FBQzdDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFNLElBQUksR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FDcEQsTUFBTSxDQUNhLEVBQ25CLE9BQU8sR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FDakQsZUFBZSxDQUNJLEVBQ3JCLFFBQVEsR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FDbEQsZ0JBQWdCLENBQ0csRUFDckIsUUFBUSxHQUFxQixRQUFRLENBQUMsY0FBYyxDQUNsRCxXQUFXLENBQ1EsRUFDckIsV0FBVyxHQUFxQixRQUFRLENBQUMsY0FBYyxDQUNyRCxhQUFhLENBQ00sQ0FBQztRQUN4QixJQUFNLElBQUksR0FBbUI7WUFDM0IsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2hDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2xDLFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDakQsV0FBVyxFQUFFLFdBQVcsQ0FBQyxLQUFLO1NBQy9CLENBQUM7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBZSxJQUFLLE9BQUEsd0JBQXdCLENBQUMsTUFBTSxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQztJQUMzRSxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBQyxJQUFvQjtJQUNsQyxJQUFJLEdBQUcsR0FDTCwrQkFBK0I7UUFDL0Isc0JBQWUsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBRztRQUMvQyx1QkFBZ0IsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBRztRQUNqRCxzQkFBZSxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUM7SUFFcEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtRQUN6QixHQUFHLElBQUksb0JBQWEsSUFBSSxDQUFDLFFBQVEsQ0FBRSxDQUFDO0tBQ3JDO0lBRUQsT0FBTyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxPQUFZLEVBQUUsUUFBYTtJQUEzQix3QkFBQSxFQUFBLFlBQVk7SUFBRSx5QkFBQSxFQUFBLGFBQWE7SUFDL0QsSUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsRUFDeEIsT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLEVBQ3BCLGtCQUFrQixHQUFHLElBQUksSUFBSSxFQUFFLEVBQy9CLG1CQUFtQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDbkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDekMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5RSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0QsbUJBQW1CLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRS9ELFdBQVcsQ0FDVCxtQkFBbUIsRUFDbkIsay9CQWtCRixPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLHNCQUMxQyxVQUFVLENBQUMsT0FBTyxDQUFDLHNCQUFVLFVBQVUsQ0FDL0MsT0FBTyxDQUNSLHdQQUtDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsc0JBQzdDLFVBQVUsQ0FBQyxPQUFPLENBQUMsc0JBQVUsVUFBVSxDQUMvQyxPQUFPLENBQ1Isc2RBWUksQ0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHJlbmRlckJsb2NrLFxuICBnZXRJU09EYXRlLFxuICBnZXRMYXN0RGF5T2ZNb250aCxcbiAgZGF0ZVRvVW5peFN0YW1wLFxuICByZXNwb25zZVRvSnNvbixcbn0gZnJvbSAnLi9saWIuanMnO1xuaW1wb3J0IHsgcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrIH0gZnJvbSAnLi9zZWFyY2gtcmVzdWx0cy5qcyc7XG5cbmludGVyZmFjZSBTZWFyY2hGb3JtRGF0YSB7XG4gIGNpdHk6IHN0cmluZztcbiAgY2hlY2tpbjogRGF0ZTtcbiAgY2hlY2tvdXQ6IERhdGU7XG4gIG1heHByaWNlOiBudW1iZXIgfCBudWxsO1xuICBjb29yZGluYXRlczogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBQbGFjZSB7XG4gIGlkOiBudW1iZXI7XG4gIGltYWdlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgcmVtb3RlbmVzczogbnVtYmVyO1xuICBib29rZWREYXRlczogbnVtYmVyW107XG4gIHByaWNlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtRGF0YSgpOiB2b2lkIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlOiBTdWJtaXRFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjaXR5OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAnY2l0eSdcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQsXG4gICAgICBjaGVja2luOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICdjaGVjay1pbi1kYXRlJ1xuICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50LFxuICAgICAgY2hlY2tvdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgJ2NoZWNrLW91dC1kYXRlJ1xuICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50LFxuICAgICAgbWF4cHJpY2U6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgJ21heC1wcmljZSdcbiAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudCxcbiAgICAgIGNvb3JkaW5hdGVzOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICdjb29yZGluYXRlcydcbiAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBkYXRhOiBTZWFyY2hGb3JtRGF0YSA9IHtcbiAgICAgIGNpdHk6IGNpdHkudmFsdWUsXG4gICAgICBjaGVja2luOiBuZXcgRGF0ZShjaGVja2luLnZhbHVlKSxcbiAgICAgIGNoZWNrb3V0OiBuZXcgRGF0ZShjaGVja291dC52YWx1ZSksXG4gICAgICBtYXhwcmljZTogbWF4cHJpY2UudmFsdWUgPyArbWF4cHJpY2UudmFsdWUgOiBudWxsLFxuICAgICAgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzLnZhbHVlLFxuICAgIH07XG4gICAgc2VhcmNoKGRhdGEpLnRoZW4oKHBsYWNlczogUGxhY2VbXSkgPT4gcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrKHBsYWNlcykpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoKGRhdGE6IFNlYXJjaEZvcm1EYXRhKSB7XG4gIGxldCB1cmw6IHN0cmluZyA9XG4gICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9wbGFjZXM/JyArXG4gICAgYGNoZWNrSW5EYXRlPSR7ZGF0ZVRvVW5peFN0YW1wKGRhdGEuY2hlY2tpbil9JmAgK1xuICAgIGBjaGVja091dERhdGU9JHtkYXRlVG9Vbml4U3RhbXAoZGF0YS5jaGVja291dCl9JmAgK1xuICAgIGBjb29yZGluYXRlcz0ke2RhdGEuY29vcmRpbmF0ZXN9YDtcblxuICBpZiAoZGF0YS5tYXhwcmljZSAhPSBudWxsKSB7XG4gICAgdXJsICs9IGAmbWF4UHJpY2U9JHtkYXRhLm1heHByaWNlfWA7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2VUb0pzb24oZmV0Y2godXJsKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hGb3JtQmxvY2soY2hlY2tpbiA9ICcnLCBjaGVja291dCA9ICcnKTogdm9pZCB7XG4gIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZSgpLFxuICAgIG1heERhdGUgPSBuZXcgRGF0ZSgpLFxuICAgIGNoZWNraW5EZWZhdWx0RGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgY2hlY2tvdXREZWZhdWx0RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIG1heERhdGUuc2V0TW9udGgobWF4RGF0ZS5nZXRNb250aCgpICsgMSk7XG4gIG1heERhdGUuc2V0RGF0ZShnZXRMYXN0RGF5T2ZNb250aChtYXhEYXRlLmdldEZ1bGxZZWFyKCksIG1heERhdGUuZ2V0TW9udGgoKSkpO1xuICBjaGVja2luRGVmYXVsdERhdGUuc2V0RGF0ZShjaGVja2luRGVmYXVsdERhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gIGNoZWNrb3V0RGVmYXVsdERhdGUuc2V0RGF0ZShjaGVja291dERlZmF1bHREYXRlLmdldERhdGUoKSArIDMpO1xuXG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtZm9ybS1ibG9jaycsXG4gICAgYFxuICAgIDxmb3JtIGlkPVwiZm9ybVwiPlxuICAgICAgPGZpZWxkc2V0IGNsYXNzPVwic2VhcmNoLWZpbGVkc2V0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj7Qk9C+0YDQvtC0PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNpdHlcIiBuYW1lPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQgdmFsdWU9XCLQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs1wiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGlkPVwiY29vcmRpbmF0ZXNcIiBuYW1lPVwiY29vcmRpbmF0ZXNcIiBkaXNhYmxlZCB2YWx1ZT1cIjU5LjkzODYsMzAuMzE0MVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJwcm92aWRlcnNcIj5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJob215XCIgY2hlY2tlZCAvPiBIb215PC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJmbGF0LXJlbnRcIiBjaGVja2VkIC8+IEZsYXRSZW50PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj4tLSE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1pbi1kYXRlXCI+0JTQsNGC0LAg0LfQsNC10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLWluLWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtcbiAgY2hlY2tpbiA/IGNoZWNraW4gOiBnZXRJU09EYXRlKGNoZWNraW5EZWZhdWx0RGF0ZSlcbn1cIiBtaW49XCIke2dldElTT0RhdGUobWluRGF0ZSl9XCIgbWF4PVwiJHtnZXRJU09EYXRlKFxuICBtYXhEYXRlXG4pfVwiIG5hbWU9XCJjaGVja2luXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLW91dC1kYXRlXCI+0JTQsNGC0LAg0LLRi9C10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLW91dC1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7XG4gIGNoZWNrb3V0ID8gY2hlY2tvdXQgOiBnZXRJU09EYXRlKGNoZWNrb3V0RGVmYXVsdERhdGUpXG59XCIgbWluPVwiJHtnZXRJU09EYXRlKG1pbkRhdGUpfVwiIG1heD1cIiR7Z2V0SVNPRGF0ZShcbiAgbWF4RGF0ZVxuKX1cIiBuYW1lPVwiY2hlY2tvdXRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWF4LXByaWNlXCI+0JzQsNC60YEuINGG0LXQvdCwINGB0YPRgtC+0Lo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibWF4LXByaWNlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIG5hbWU9XCJwcmljZVwiIGNsYXNzPVwibWF4LXByaWNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj48YnV0dG9uPtCd0LDQudGC0Lg8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvZm9ybT5cbiAgICBgXG4gICk7XG59XG4iXX0=
