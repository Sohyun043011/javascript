
// 모든 tab-button 여러개중 0번째 선택
// 지금 HTML 내에 있는 탭버튼 갯수만큼 돌려
var countTab = $('.tab-button').length;

for(let i=0;i<countTab;i++){
    $('.tab-button').eq(i).click(function(e){

        //html 요소에 data-작명="값" 으로 id 값을 부여함.
        // 현재 선택한 요소 : e.target의 위의 저장한 id를 가져옴
        openTab(e.target.dataset.id);
        

    });
}
function openTab(i){
    $('.tab-button').removeClass('active');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(i).addClass('active');
    $('.tab-content').eq(i).addClass('show');
}