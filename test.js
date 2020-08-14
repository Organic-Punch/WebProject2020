var xhr = new XMLHttpRequest();
var url = 'http://openapi.1365.go.kr/openapi/service/rest/CodeInquiryService/getAreaCodeInquiryList'; /*URL*/
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + '서비스키'; /*Service Key*/
queryParams += '&' + encodeURIComponent('schSido') + '=' + encodeURIComponent('%ec%84%9c%ec%9a%b8(서울)'); /**/
queryParams += '&' + encodeURIComponent('schGugun') + '=' + encodeURIComponent('%ec%a2%85%eb%a1%9c(종로)'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function() {
    if (this.readyState == 4) {
        alert('Status: ' + this.status + 'nHeaders: ' + JSON.stringify(this.getAllResponseHeaders()) + 'nBody: ' + this.responseText);
    }
};

xhr.send('');