function logout() {
    if (confirm("로그아웃 하시겠습니까? 진행 중인 타이머는 저장 후 종료됩니다.")) {
        // 1. 만약 현재 타이머가 돌아가고 있다면 강제 종료 (중요!)
        if (activeTaskId) {
            // 현재 작업 중인 경우 마감 처리 함수를 호출
            stopTask(activeTaskId, 0, "", "simple"); 
        }

        // 2. localStorage 정보 삭제
        localStorage.removeItem('mySeatNumber');
        localStorage.removeItem('myName');
        
        // 3. 페이지 새로고침 (이게 가장 확실하게 모든 메모리를 초기화합니다)
        location.reload();
    }
}
