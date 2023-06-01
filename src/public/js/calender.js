(function(){
    $(function(){
      // calendar element 취득
      var calendarEl = $('#calendar')[0];
      // full-calendar 생성하기
      var calendar = new FullCalendar.Calendar(calendarEl, {
        height: '700px', // calendar 높이 설정
        expandRows: true, // 화면에 맞게 높이 재설정
        slotMinTime: '08:00', // Day 캘린더에서 시작 시간
        slotMaxTime: '20:00', // Day 캘린더에서 종료 시간
        // 해더에 표시할 툴바
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        initialView: 'dayGridMonth', // 초기 로드 될때 보이는 캘린더 화면(기본 설정: 달)
         // 초기 날짜 설정 (설정하지 않으면 오늘 날짜가 보인다.)
        navLinks: true, // 날짜를 선택하면 Day 캘린더나 Week 캘린더로 링크
        editable: true, // 수정 가능?
        selectable: true, // 달력 일자 드래그 설정가능
        nowIndicator: true, // 현재 시간 마크
        dayMaxEvents: true, // 이벤트가 오버되면 높이 제한 (+ 몇 개식으로 표현)
        locale: 'ko', // 한국어 설정
        eventAdd: function(obj) { // 이벤트가 추가되면 발생하는 이벤트
          console.log(obj);
        },
        eventChange: function(obj) { // 이벤트가 수정되면 발생하는 이벤트
          console.log(obj);
        },
        eventRemove: function(obj){ // 이벤트가 삭제되면 발생하는 이벤트
          console.log(obj);
        },
        select: function(arg) { // 캘린더에서 드래그로 이벤트를 생성할 수 있다.
          var title = prompt('Event Title:');
          if (title) {
            calendar.addEvent({
              title: title,
              start: arg.start,
              end: arg.end,
              allDay: arg.allDay
            })
          }
          calendar.unselect()
        },
        // 이벤트 
        events: [
          {
            title: '등록기간',
            start: '2023-02-13',
            end: '2023-03-08'
          },
          {
            title: '개강일',
            start: '2023-02-23'
          },
          {
            title: '신입생OT',
            start: '2023-02-23',
            end: '2023-02-24'
          },
          {
            title: '개강일',
            start: '2023-03-02'
          },
          {
            title: '개교기념일',
            start: '2023-03-05'
          },
          {
            title: '수업 1/4선',
            start: '2023-03-28'
          },
          {
            title: '수업 1/3선',
            start: '2023-04-05'
          },
          {
            title: '봄신앙축제',
            start: '2023-04-12'
          },
          {
            title: '중간평가',
            start: '2023-04-20',
            end: '2023-04-26'
          },
          {
            title: '수업 1/2선',
            start: '2023-04-23'
          },
          {
            title: '체육대회',
            start: '2023-05-11'
          },
          {
            title: '수업3/4선',
            start: '2023-05-19'
          },
          {
            title: '보강주간',
            start: '2023-06-08',
            end: '2023-06-16'
          },
          {
            title: '기말평가',
            start: '2023-06-19',
            end: '2023-06-23'
          },
          {
            title: '종강일',
            start: '2023-06-23'
          },
          {
            title: '하계방학',
            start: '2023-06-24',
            end: '2023-08-27'
          },
          {
            title: '등록기간',
            start: '2023-08-10',
            end: '2023-09-07'
          },
          {
            title: '개강일',
            start: '2023-08-28'
          },
          {
            title: '수업1/4선',
            start: '2023-09-23'
          },
          {
            title: '석학제/방송제/찬양경연대회',
            start: '2023-09-21',
            end: '2023-09-22'
          },
          {
            title: '수업1/3선',
            start: '2023-10-01'
          },
          {
            title: '중간평가',
            start: '2023-10-16',
            end: '2023-10-20'
          },
          {
            title: '수업1/2선',
            start: '2023-10-19'
          },
          {
            title: '수업3/4선',
            start: '2023-11-14'
          },
          {
            title: '보강주간',
            start: '2023-12-04',
            end: '2023-12-11'
          },
          {
            title: '기말평가',
            start: '2023-12-12',
            end: '2023-12-18'
          },
          {
            title: '종강일',
            start: '2023-12-18'
          },
          {
            title: '동계방학',
            start: '2023-12-19',
            end: '2024-02-29'
          },
          {
            title: '학위수여식',
            start: '2024-02-16'
          }
        ]
      });
      // 캘린더 랜더링
      calendar.render();
    });
  })();