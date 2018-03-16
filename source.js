<script>
// Добавляем в Cookie UTM метки первого визита
function setCookie(utm) {
	var date = new Date(new Date().getTime() + (30*24*60*60*1000));
	document.cookie = 'utm_storage=' + utm + '; path=/; expires=' + date.toUTCString();
};

// Получаем utm метки первого визита из Cookie
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Исполняющая функция
function checkUTM() {
	if ((getCookie('utm_storage') == undefined || getCookie('utm_storage') == "") && location.search != "") {
		setCookie(location.search);
	};
};

checkUTM();

// Вы можете получить UTM-метки getCookie('utm_storage')
</script>
