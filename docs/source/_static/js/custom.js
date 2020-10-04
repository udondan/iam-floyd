$(function () {
  $('.c1:contains("//")').each(function () {
    if ($(this).text() == '//') {
      $(this).remove()
    }
  })
})
