export default class HomePage {
  guestBook = '//a[contains(text(),"Задать вопрос")]';
  topic = '//input[@id="pgbtitle"]';
  nameAndAddress = '//input[@id="pgbusername"]';
  email = '//input[@id="pgbemail"]';
  content = '//*[@id="tinymce"]';
  guestbookDescription = 'div[class="guestbook-description"] p strong';
}
