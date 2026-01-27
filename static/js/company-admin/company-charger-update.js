// 충전소 수정 폼 JS (화면용)
// - 설치주소 필수 입력 검증
// - 주소 입력 창 비어있을 경우 에러 문구/스타일 적용
// - 입력 중 값이 들어오면 에러 상태 해제

document.addEventListener('DOMContentLoaded', () => {
    // 폼 요소 (수정 완료 버튼 포함)
    const form = document.getElementById('new-request');
    if (!form) return;

    // 설치주소 input (필수 입력 대상)
    const addressInput = document.getElementById('install-address');
    if (!addressInput) return;

    // 설치주소 필드 전체 영역 (에러 스타일 적용용)
    const addressField = addressInput.closest('.form-field');

    // 설치주소 하단 에러 문구
    const addressError = addressField?.querySelector('.field-error');

    // 폼 상단 공통 에러 문구
    const formError = form.querySelector('.form-error');

    // 폼 제출 시 필수값 검증
    form.addEventListener('submit', (e) => {
        // 화면 확인 단계이므로 실제 submit 방지
        e.preventDefault();

        // 이전 에러 상태 초기화
        if (formError) formError.hidden = true;
        if (addressField) addressField.classList.remove('is-error');
        if (addressError) addressError.hidden = true;

        // 설치주소가 비어 있으면 에러 표시
        if (!addressInput.value.trim()) {
            if (formError) formError.hidden = false;
            if (addressField) addressField.classList.add('is-error');
            if (addressError) addressError.hidden = false;

            addressInput.focus();
            return;
        }

        // 필수 입력 통과 (화면 단계)
        console.log('필수 입력 통과');
    });

    // 설치주소 입력 중이면 에러 상태 해제
    addressInput.addEventListener('input', () => {
        if (addressInput.value.trim()) {
            if (addressField) addressField.classList.remove('is-error');
            if (addressError) addressError.hidden = true;
            if (formError) formError.hidden = true;
        }
    });
});
