/*
 * Copyright © 2016-2017 The Thingsboard Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default angular.module('thingsboard.locale', [])
    .constant('locales',
        {
            'ko_KR': {
                "access": {
                    "unauthorized": "권한 없음.",
                    "unauthorized-access": "허가되지 않은 접근",
                    "unauthorized-access-text": "이 리소스에 접근하려면 로그인해야 합니다!",
                    "access-forbidden": "접근 금지",
                    "access-forbidden-text": "접근 권한이 없습니다.!<br/> 만일 이 페이지에 계속 접근하려면 다른 사용자로 로그인 하세요.",
                    "refresh-token-expired": "세션이 만료되었습니다.",
                    "refresh-token-failed": "세션을 새로 고칠 수 없습니다."
                },
                "action": {
                    "activate": "활설화",
                    "suspend": "비활성화",
                    "save": "저장",
                    "saveAs": "다른 이름으로 저장",
                    "cancel": "취소",
                    "ok": "확인",
                    "delete": "삭제",
                    "add": "추가",
                    "yes": "네",
                    "no": "아니오",
                    "update": "업데이트",
                    "remove": "제거",
                    "search": "검색",
                    "assign": "할당",
                    "unassign": "비할당",
                    "apply": "적용",
                    "apply-changes": "변경사항 적용",
                    "edit-mode": "수정 모드",
                    "enter-edit-mode": "수정 모드 진입",
                    "decline-changes": "변경사항 포기",
                    "close": "닫기",
                    "back": "뒤로",
                    "run": "실행",
                    "sign-in": "로그인!",
                    "edit": "수정",
                    "view": "보기",
                    "create": "만들기",
                    "drag": "끌기",
                    "refresh": "새로고침",
                    "undo": "취소",
                    "copy": "복사",
                    "paste": "붙여넣기",
                    "import": "가져오기",
                    "export": "내보내기"
                },
                "aggregation": {
                    "aggregation": "집합",
                    "function": "데이터 집합 함수",
                    "limit": "최대 값",
                    "group-interval": "그룹 간격",
                    "min": "최소",
                    "max": "최대",
                    "avg": "평균",
                    "sum": "합계",
                    "count": "숫자",
                    "none": "없음"
                },
                "admin": {
                    "general": "일반",
                    "general-settings": "일반 설정",
                    "outgoing-mail": "메일 전송",
                    "outgoing-mail-settings": "메일 전송 설정",
                    "system-settings": "시스템 설정",
                    "test-mail-sent": "테스트 메일이 성공적으로 전송되었습니다!",
                    "base-url": "기본 URL",
                    "base-url-required": "기본 URL을 입력해야 합니다.",
                    "mail-from": "보내는 사람",
                    "mail-from-required": "보내는 사람을 입력해야 합니다.",
                    "smtp-protocol": "SMTP 프로토콜",
                    "smtp-host": "SMTP 호스트",
                    "smtp-host-required": "SMTP 호스트를 입력해야 합니다.",
                    "smtp-port": "SMTP 포트",
                    "smtp-port-required": "SMTP 포트를 입력해야 합니다.",
                    "smtp-port-invalid": "올바른 SMTP 포트가 아닙니다.",
                    "timeout-msec": "제한시간 (msec)",
                    "timeout-required": "제한시간을 입력해야 합니다.",
                    "timeout-invalid": "올바른 제한시간이 아닙니다.",
                    "enable-tls": "TLS 사용",
                    "send-test-mail": "테스트 메일 보내기"
                },
                "attribute": {
                    "attributes": "속성",
                    "latest-telemetry": "최근 데이터",
                    "attributes-scope": "디바이스 속성 범위",
                    "scope-latest-telemetry": "최근 데이터",
                    "scope-client": "클라이언트 속성",
                    "scope-server": "서버 속성",
                    "scope-shared": "공유 속성",
                    "add": "속성 추가",
                    "key": "Key",
                    "key-required": "속성 key를 입력하세요.",
                    "value": "Value",
                    "value-required": "속성 value를 입력하세요.",
                    "delete-attributes-title": "{ count, select, 1 {속성} other {여러 속성들을} } 삭제하시겠습니까??",
                    "delete-attributes-text": "모든 선택된 속성들이 제거 될 것이므로 주의하십시오.",
                    "delete-attributes": "속성 삭제",
                    "enter-attribute-value": "속성 값 입력",
                    "show-on-widget": "위젯 보기",
                    "widget-mode": "위젯 모드",
                    "next-widget": "다음 위젯",
                    "prev-widget": "이전 위젯",
                    "add-to-dashboard": "대시보드에 추가",
                    "add-widget-to-dashboard": "대시보드에 위젯 추가",
                    "selected-attributes": "{ count, select, 1 {속성 1개} other {속성 #개} } 선택됨",
                    "selected-telemetry": "{ count, select, 1 {최근 데이터 1개} other {최근 데이터 #개} } 선택됨"
                },
                "confirm-on-exit": {
                    "message": "변경 사항을 저장하지 않았습니다. 이 페이지를 나가시겠습니까?",
                    "html-message": "변경 사항을 저장하지 않았습니다.<br/>이 페이지를 나가시겠습니까?",
                    "title": "저장되지 않은 변경사항"
                },
                "contact": {
                    "country": "국가",
                    "city": "시",
                    "state": "도",
                    "postal-code": "우편 번호",
                    "postal-code-invalid": "숫자만 입력하세요.",
                    "address": "주소",
                    "address2": "상세주소",
                    "phone": "전화번호",
                    "email": "Email",
                    "no-address": "주소 정보 없음"
                },
                "common": {
                    "username": "사용자명",
                    "password": "비밀번호",
                    "enter-username": "사용자명을 입력하세요.",
                    "enter-password": "비밀번호를 입력하세요.",
                    "enter-search": "검색어 입력"
                },
                "customer": {
                    "customers": "커스터머",
                    "management": "커스터머 관리",
                    "dashboard": "커스터머 대시보드",
                    "dashboards": "커스터머 대시보드",
                    "devices": "커스터머 디바이스",
                    "add": "커스터머 추가",
                    "delete": "커스터머 삭제",
                    "manage-customer-users": "커스터머 사용자 관리",
                    "manage-customer-devices": "커스터머 디바이스 관리",
                    "manage-customer-dashboards": "커스터머 대시보드 관리",
                    "add-customer-text": "커스터머 추가",
                    "no-customers-text": "커스터머가 없습니다.",
                    "customer-details": "커스터머 상세정보",
                    "delete-customer-title": "'{{customerTitle}}' 커스터머를 삭제하시겠습니까?",
                    "delete-customer-text": "커스터머 및 관련된 모든 데이터를 복구할 수 없으므로 주의하십시오.",
                    "delete-customers-title": "{ count, select, 1 {커스터머 1개} other {커스터머 #개} }를 삭제하시겠습니까?",
                    "delete-customers-action-title": "{ count, select, 1 {커스터머 1개} other {커스터머 #개} } 삭제",
                    "delete-customers-text": "선택된 커스터머는 삭제되고 관련된 모든 데이터를 복구할 수 없으므로 주의하십시오.",
                    "manage-users": "사용자 관리",
                    "manage-devices": "디바이스 관리",
                    "manage-dashboards": "대시보드 관리",
                    "title": "타이틀",
                    "title-required": "타이틀을 입력하세요.",
                    "description": "설명"
                },
                "datetime": {
                    "date-from": "시작 날짜",
                    "time-from": "시작 시간",
                    "date-to": "종료 날짜",
                    "time-to": "종료 시간"
                },
                "dashboard": {
                    "dashboard": "대시보드",
                    "dashboards": "대시보드",
                    "management": "대시보드 관리",
                    "view-dashboards": "대시보드 보기",
                    "add": "대시보드 추가",
                    "assign-dashboard-to-customer": "대시보드 커스터머 선택",
                    "assign-dashboard-to-customer-text": "대시보드 커스터머를 선택하세요.",
                    "assign-to-customer-text": "대시보드 커스터머를 선택하세요.",
                    "assign-to-customer": "커스터머 선택",
                    "unassign-from-customer": "커스터머 해제",
                    "no-dashboards-text": "대시보드가 없습니다",
                    "no-widgets": "설정된 위젯 없음",
                    "add-widget": "위젯 추가",
                    "title": "타이틀",
                    "select-widget-title": "위젯 선택",
                    "select-widget-subtitle": "사용가능한 위젯 타입 목록",
                    "delete": "대시보드 삭제",
                    "title-required": "타이틀을 입력하세요.",
                    "description": "설명",
                    "details": "상세",
                    "dashboard-details": "대시보드 상세정보",
                    "add-dashboard-text": "대시보드 추가",
                    "assign-dashboards": "대시보드 지정",
                    "assign-new-dashboard": "새 대시보드 할당",
                    "assign-dashboards-text": "{ count, select, 1 {대시보드 1개} other {대시보드 #개} }를 커스터머 할당",
                    "delete-dashboards": "대시보드 삭제",
                    "unassign-dashboards": "대시보드 할당 취소",
                    "unassign-dashboards-action-title": "{ count, select, 1 {대시보드 1개} other {대시보드 #개} }를 커스터머 할당 취소",
                    "delete-dashboard-title": "'{{dashboardTitle}}' 대시보드를 삭제하시겠습니까?",
                    "delete-dashboard-text": "대시보드 및 관련된 모든 데이터를 복구할 수 없으므로 주의하십시오.",
                    "delete-dashboards-title": "{ count, select, 1 {대시보드 1개} other {대시보드 #개} }를 삭제하시겠습니까?",
                    "delete-dashboards-action-title": "{ count, select, 1 {대시보드 1개} other {대시보드 #개} } 삭제",
                    "delete-dashboards-text": "선택된 대시보드가 삭제되고 관련된 모든 데이터를 복구할 수 없으므로 주의하십시오.",
                    "unassign-dashboard-title": "'{{dashboardTitle}}' 대시보드 할당을 해제하시겠습니까?",
                    "unassign-dashboard-text": "대시보드가 할당 해제되고 커스터머는 액세스 할 수 없게됩니다.",
                    "unassign-dashboard": "대시보드 할달 취소",
                    "unassign-dashboards-title": "{ count, select, 1 {대시보드 1개} other {대시보드 #개} }의 할당을 취소하시겠습니까?",
                    "unassign-dashboards-text": "선택된 대시보드가 할당 해제되고 커스터머는 액세스 할 수 없게됩니다.",
                    "select-dashboard": "대시보드 선택",
                    "no-dashboards-matching": "'{{dashboard}}'와 일치하는 대시보드가 없습니다.",
                    "dashboard-required": "대시보드를 입력하세요.",
                    "select-existing": "기존 대시보드 선택",
                    "create-new": "대시보드 생성",
                    "new-dashboard-title": "새로운 대시보드 타이틀",
                    "open-dashboard": "대시보드 열기",
                    "set-background": "대시보드 설정",
                    "background-color": "배경색",
                    "background-image": "배경 이미지",
                    "background-size-mode": "배경 사이즈 모드",
                    "no-image": "이미지 없음",
                    "drop-image": "이곳에 이미지를 끌어다놓거나 이곳을 클릭하여 파일을 선택하고 업로드하세요.",
                    "settings": "설정",
                    "columns-count": "열 개수",
                    "columns-count-required": "열 개수를 입력하세요.",
                    "min-columns-count-message": "열 개수를 최소 10 이상 입력하세요.",
                    "max-columns-count-message": "열 개수를 최대 100 이하로 입력하세요.",
                    "widgets-margins": "위젯 사이 여백 크기",
                    "horizontal-margin": "세로 여백",
                    "horizontal-margin-required": "세로 여백 값을 입력하세요.",
                    "min-horizontal-margin-message": "세로 여백 값을 최소 0 이상 입력하세요.",
                    "max-horizontal-margin-message": "세로 여백 값을 최대 50 이하로 입력하세요.",
                    "vertical-margin": "가로 여백",
                    "vertical-margin-required": "가로 여백 값을 입력하세요.",
                    "min-vertical-margin-message": "가로 여백 값을 최소 0 이상 입력하세요.",
                    "max-vertical-margin-message": "가로 여백 값을 최대 50 이하로 입력하세요.",
                    "display-title": "대시보드 타이틀 표시",
                    "title-color": "타이틀 색상",
                    "import": "대시보드 가져오기",
                    "export": "대시보드 내보내기",
                    "export-failed-error": "대시보드 내보내기를 할 수 없습니다.: {error}",
                    "create-new-dashboard": "대시보드 생성",
                    "dashboard-file": "대시보드 파일",
                    "invalid-dashboard-file-error": "대시보드 가져오기를 할 수 없습니다.: 대시보드 데이터 구조가 잘못되었습니다.",
                    "dashboard-import-missing-aliases-title": "대시보드 앨리어스를 위해 누락 된 디바이스 선택",
                    "create-new-widget": "새로운 위젯 생성",
                    "import-widget": "위젯 가져오기",
                    "widget-file": "위젯 파일",
                    "invalid-widget-file-error": "위젯 가져오기를 할 수 없습니다: 위젯 데이터 구조가 잘못되었습니다.",
                    "widget-import-missing-aliases-title": "위젯에서 사용하는 누락 된 디바이스 선택",
                    "open-toolbar": "대시보드 툴바 열기",
                    "close-toolbar": "툴바 닫기",
                    "configuration-error": "구성 오류",
                    "alias-resolution-error-title": "대시보드 앨리어스 구성 오류",
                    "invalid-aliases-config": "일부 앨리어스 필터와 일치하는 디바이스를 찾을 수 없습니다.<br/>" +
                                              "이 문제를 해결하려면 관리자에게 문의하십시오.",
                    "select-devices": "디바이스 선택",
                    "assignedToCustomer": "커스터머에 할당됨"
                },
                "datakey": {
                    "settings": "설정",
                    "advanced": "고급",
                    "label": "Label",
                    "color": "색상",
                    "data-generation-func": "데이터 생성 기능",
                    "use-data-post-processing-func": "데이터 후처리 기능 사용",
                    "configuration": "데이터 key 구성",
                    "timeseries": "Timeseries",
                    "attributes": "Attributes",
                    "timeseries-required": "디바이스 timeseries 를 입력하세요.",
                    "timeseries-or-attributes-required": "디바이스 timeseries/attributes 를 입력하세요.",
                    "function-types": "함수 유형",
                    "function-types-required": "함수 유형을 입력하세요."
                },
                "datasource": {
                    "type": "데이터소스 유형",
                    "add-datasource-prompt": "데이터소스를 추가하세요."
                },
                "details": {
                    "edit-mode": "편집 모드",
                    "toggle-edit-mode": "편집 모드 전환"
                },
                "device": {
                    "device": "디바이스",
                    "device-required": "디바이스를 입력하세요.",
                    "devices": "디바이스",
                    "management": "디바이스 관리",
                    "view-devices": "디바이스 보기",
                    "device-alias": "디바이스 앨리어스",
                    "aliases": "디바이스 앨리어스",
                    "no-alias-matching": "'{{alias}}' 를 찾을 수 없습니다.",
                    "no-aliases-found": "앨리어스가 없습니다.",
                    "no-key-matching": "'{{key}}' 를 찾을 수 없습니다.",
                    "no-keys-found": "Key가 없습니다.",
                    "create-new-alias": "새로 만들기!",
                    "create-new-key": "새로 만들기!",
                    "duplicate-alias-error": "중복된 '{{alias}}' 앨리어스가 있습니다.<br> 디바이스 앨리어스는 대시보드 내에서 고유해야 합니다.",
                    "configure-alias": "'{{alias}}' 앨리어스 구성",
                    "no-devices-matching": "'{{device}}'와 일치하는 디바이스를 찾을 수 없습니다.",
                    "alias": "앨리어스",
                    "alias-required": "디바이스 앨리어스를 입력하세요.",
                    "remove-alias": "디바이스 앨리어스 삭제",
                    "add-alias": "디바이스 앨리어스 추가",
                    "name-starts-with": "시작되는 이름",
                    "device-list": "디바이스 리스트",
                    "use-device-name-filter": "필터 사용",
                    "device-list-empty": "선택된 디바이스가 없습니다.",
                    "device-name-filter-required": "디바이스 필터 이름을 입력하세요.",
                    "device-name-filter-no-device-matched": "'{{device}}' 로 시작되는 디바이스를 찾을 수 없습니다.",
                    "add": "디바이스 추가",
                    "assign-to-customer": "커스터머에게 할당",
                    "assign-device-to-customer": "디바이스를 커스터머에게 할당",
                    "assign-device-to-customer-text": "고객에게 할당할 디바이스를 선택하십시오.",
                    "no-devices-text": "디바이스 없음",
                    "assign-to-customer-text": "디바이스를 할당할 커스터머를 선택하세요.",
                    "device-details": "디바이스 상세정보",
                    "add-device-text": "디바이스 추가",
                    "credentials": "크리덴셜",
                    "manage-credentials": "크리덴셜 관리",
                    "delete": "디바이스 삭제",
                    "assign-devices": "디바이스 할당",
                    "assign-devices-text": "{ count, select, 1 {디바이스 1개} other {디바이스 #개} }를 커서터머에 할당",
                    "delete-devices": "디바이스 삭제",
                    "unassign-from-customer": "커스터머 할당 해제",
                    "unassign-devices": "디바이스 할당 취소",
                    "unassign-devices-action-title": "{ count, select, 1 {디바이스 1개} other {디바이스 #개} }를 커스터머에게서 할당 해제",
                    "assign-new-device": "새로운 디바이스 할당",
                    "view-credentials": "크리덴셜 보기",
                    "delete-device-title": "'{{deviceName}}' 디바이스를 삭제하시겠습니까?",
                    "delete-device-text": "디바이스 및 관련된 모든 데이터를 복구할 수 없으므로 주의하십시오.",
                    "delete-devices-title": "{ count, select, 1 {디바이스 1개} other {디바이스 #개} }를 삭제하시겠습니까?",
                    "delete-devices-action-title": "{ count, select, 1 {디바이스 1개} other {디바이스 #개} } 삭제",
                    "delete-devices-text": "선택된 디바이스가 삭제되고 관련된 모든 데이터를 복구할 수 없으므로 주의하십시오.",
                    "unassign-device-title": "'{{deviceName}}' 디바이스 할당을 해제하시겠습니까?",
                    "unassign-device-text": "디바이스가 할당 해제되고 커스터머는 액세스 할 수 없게됩니다.",
                    "unassign-device": "디바이스 할당 취소",
                    "unassign-devices-title": "{ count, select, 1 {디바이스 1개} other {디바이스 #개} }의  할당을 해제하시겠습니까??",
                    "unassign-devices-text": "선택된 디바이스가 할당 해제되고 커스터머는 액세스 할 수 없게됩니다.",
                    "device-credentials": "디바이스 크리덴셜",
                    "credentials-type": "크리덴셜 타입",
                    "access-token": "억세스 토큰",
                    "access-token-required": "액세스 토큰을 입력하세요.",
                    "access-token-invalid": "액세스 토큰 길이는 1 - 20 자 여야합니다.",
                    "rsa-key": "RSA public key",
                    "rsa-key-required": "RSA public key 를 입력하세요.",
                    "secret": "시크릿",
                    "secret-required": "시크릿을 입력하세요.",
                    "name": "이름",
                    "name-required": "이름을 입력하세요.",
                    "description": "설명",
                    "events": "이벤트",
                    "details": "상세",
                    "copyId": "디바이스 아이디 복사",
                    "copyAccessToken": "억세스 토큰 복사",
                    "idCopiedMessage": "디바이스 아이디가 클립보드에 복사되었습니다.",
                    "accessTokenCopiedMessage": "디바이스 억세스 토큰이 클립보드에 복사되었습니다.",
                    "assignedToCustomer": "커스터머에 할당됨",
                    "unable-delete-device-alias-title": "디바이스 앨리어스를 삭제할 수 없습니다.",
                    "unable-delete-device-alias-text": "'{{deviceAlias}}' 디바이스 앨리어스를 삭제할 수 없습니다. 다음 위젯에서 사용하고 있습니다.<br/>{{widgetsList}}",
                    "is-gateway": "게이트웨이 여부"
                },
                "dialog": {
                    "close": "다이얼로그 닫기"
                },
                "error": {
                    "unable-to-connect": "서버에 연결할 수 없습니다! 인터넷 연결을 확인하십시오.",
                    "unhandled-error-code": "처리되지 않은 오류 코드: {{errorCode}}",
                    "unknown-error": "알 수 없는 오류"
                },
                "event": {
                    "event-type": "이벤트 타입",
                    "type-alarm": "알람",
                    "type-error": "에러",
                    "type-lc-event": "주기적 이벤트",
                    "type-stats": "통계",
                    "no-events-prompt": "이벤트 없음",
                    "error": "에러",
                    "alarm": "알람",
                    "event-time": "이벤트 발생 시간",
                    "server": "서버",
                    "body": "Body",
                    "method": "Method",
                    "event": "이벤트",
                    "status": "상태",
                    "success": "성공",
                    "failed": "실패",
                    "messages-processed": "처리된 메시지",
                    "errors-occurred": "오류가 발생했습니다"
                },
                "fullscreen": {
                    "expand": "전체화면으로 확장",
                    "exit": "전체화면 종료",
                    "toggle": "전체화면 모드 전환",
                    "fullscreen": "전체화면"
                },
                "function": {
                    "function": "기능"
                },
                "grid": {
                    "delete-item-title": "이 항목을 삭제 하시겠습니까?",
                    "delete-item-text": "항목과 모든 관련 데이터를 복구 할 수 없으므로 주의하십시오.",
                    "delete-items-title": "{ count, select, 1 {아이템 1개} other {아이템 #개} }를 삭제하시겠습니까?",
                    "delete-items-action-title": "{ count, select, 1 {아이템 1개} other {아이템 #개} } 삭제",
                    "delete-items-text": "선택한 모든 아이템이 제거되고 관련된 모든 데이터는 복구 할 수 없으므로 주의하십시오.",
                    "add-item-text": "새로운 아이템 추가",
                    "no-items-text": "아이템이 없습니다.",
                    "item-details": "아이템 상세",
                    "delete-item": "아이템 삭제",
                    "delete-items": "아이템 삭제",
                    "scroll-to-top": "스크롤 맨 위로"
                },
                "help": {
                    "goto-help-page": "도움"
                },
                "home": {
                    "home": "홈",
                    "profile": "프로파일",
                    "logout": "로그아웃",
                    "menu": "메뉴",
                    "avatar": "Avatar",
                    "open-user-menu": "사용자 메뉴 열기"
                },
                "import": {
                    "no-file": "선택된 파일이 없습니다.",
                    "drop-file": "JSON 파일을 끌어다 놓거나 클릭하여 업로드 할 파일을 선택하십시오."
                },
                "item": {
                    "selected": "선택됨"
                },
                "js-func": {
                    "no-return-error": "함수는 값을 반환해야 합니다!",
                    "return-type-mismatch": "함수는 '{{type}}' 유형의 값을 반환해야 합니다!"
                },
                "legend": {
                    "position": "범례 위치",
                    "show-max": "최대값 표시",
                    "show-min": "최소값 표시",
                    "show-avg": "평균값 표시",
                    "show-total": "총합 표시",
                    "settings": "범례 설정",
                    "min": "최소",
                    "max": "최대",
                    "avg": "평균",
                    "total": "합계"
                },
                "login": {
                    "login": "로그인",
                    "request-password-reset": "비밀번호 재설정",
                    "reset-password": "비밀번호 재설정",
                    "create-password": "비밀번호 생성",
                    "passwords-mismatch-error": "입력된 비밀번호는 같아야 합니다!",
                    "password-again": "비밀번호 확인",
                    "sign-in": "로그인",
                    "username": "사용자명 (이메일)",
                    "remember-me": "아이디 저장",
                    "forgot-password": "비밀번호찾기",
                    "password-reset": "비밀번호 재설정",
                    "new-password": "새 비밀번호",
                    "new-password-again": "새 비밀번호 확인",
                    "password-link-sent-message": "비밀번호 재설정 링크가 성공적으로 전송되었습니다!",
                    "email": "이메일"
                },
                "plugin": {
                    "plugins": "플러그인",
                    "delete": "플러그인 삭제",
                    "activate": "플러그인 활성화",
                    "suspend": "플러그인 비활성화",
                    "active": "활성화",
                    "suspended": "비활성화",
                    "name": "이름",
                    "name-required": "이름을 입력하세요.",
                    "description": "설명",
                    "add": "플러그인 추가",
                    "delete-plugin-title": "'{{pluginName}}' 플러그인을 삭제하시겠습니까?",
                    "delete-plugin-text": "플러그인과 관련된 모든 데이터를 복구할 수 없으므로 주의하십시오.",
                    "delete-plugins-title": "{ count, select, 1 {플러그인 1개} other {플러그인 #개} }를 삭제하시겠습니까?",
                    "delete-plugins-action-title": "{ count, select, 1 {플러그인 1개} other {플러그인 #개} } 삭제",
                    "delete-plugins-text": "선택된 플러그인이 삭제되고 관련된 모든 데이터가 없어지므로 주의하십시오.",
                    "add-plugin-text": "새로운 플러그인 추가",
                    "no-plugins-text": "플러그인이 없습니다.",
                    "plugin-details": "플러그인 상세정보",
                    "api-token": "API 토큰",
                    "api-token-required": "API 토큰을 입력하세요.",
                    "type": "플러그인 종류",
                    "type-required": "플러그인 종류를 선택해주세요.",
                    "configuration": "플러그인 구성",
                    "system": "시스템",
                    "select-plugin": "플러그인 선택",
                    "plugin": "플러그인",
                    "no-plugins-matching": "'{{plugin}}'과 일치하는 플러그인을 찾을 수 없습니다.",
                    "plugin-required": "플러그인을 입력하세요.",
                    "plugin-require-match": "기존의 플러그인을 선택해주세요.",
                    "events": "이벤트",
                    "details": "상세",
                    "import": "플러그인 가져오기",
                    "export": "플러그인 내보내기",
                    "export-failed-error": "플러그인을 내보내기 할 수 없습니다.: {{error}}",
                    "create-new-plugin": "새로운 플러그인 생성",
                    "plugin-file": "플러그인 파일",
                    "invalid-plugin-file-error": "플러그인을 가져오기 할 수 없습니다.: 잘못된 플러그인 데이터 구조입니다."
                },
                "position": {
                    "top": "상단",
                    "bottom": "하단",
                    "left": "왼쪽",
                    "right": "오른쪽"
                },
                "profile": {
                    "profile": "프로파일",
                    "change-password": "비밀번호 변경",
                    "current-password": "현재 비밀번호"
                },
                "rule": {
                    "rules": "규칙",
                    "delete": "규칙 삭제",
                    "activate": "규칙 활성화",
                    "suspend": "규칙 비활성화",
                    "active": "활성화",
                    "suspended": "비활성화",
                    "name": "이름",
                    "name-required": "이름을 입력하세요.",
                    "description": "설명",
                    "add": "규칙 추가",
                    "delete-rule-title": "'{{ruleName}}' 규칙을 삭제하시겠습니까?",
                    "delete-rule-text": "규칙과 관련된 모든 데이터를 복구할 수 없으므로 주의하십시오.",
                    "delete-rules-title": "{ count, select, 1 {규칙 1개} other {규칙 #개} }를 삭제하시겠습니까?",
                    "delete-rules-action-title": "{ count, select, 1 {규칙 1개} other {규칙 #개} } 삭제",
                    "delete-rules-text": "선택된 규칙이 삭제되고 관련된 모든 데이터를 복구할 수 없으므로 주의하십시오.",
                    "add-rule-text": "규칙 추가",
                    "no-rules-text": "규칙이 없습니다.",
                    "rule-details": "규칙 상세정보",
                    "filters": "필터",
                    "filter": "필터",
                    "add-filter-prompt": "필터를 추가해 주세요.",
                    "remove-filter": "필터 삭제",
                    "add-filter": "필터 추가",
                    "filter-name": "필터 이름",
                    "filter-type": "필터 종류",
                    "edit-filter": "필터 수정",
                    "view-filter": "필터 보기",
                    "component-name": "이름",
                    "component-name-required": "이름을 입력하세요.",
                    "component-type": "종류",
                    "component-type-required": "타입을 입력하세요.",
                    "processor": "프로세서",
                    "no-processor-configured": "프로세서가 구성되지 않았습니다.",
                    "create-processor": "프로세서 생성",
                    "processor-name": "프로세서 이름",
                    "processor-type": "프로세서 종류",
                    "plugin-action": "플러그인 액션",
                    "action-name": "액션 이름",
                    "action-type": "액션 종류",
                    "create-action-prompt": "액션을 만들어 주세요",
                    "create-action": "액션 생성",
                    "details": "상세",
                    "events": "이벤트",
                    "system": "시스템",
                    "import": "규칙 가져오기",
                    "export": "규칙 내보내기",
                    "export-failed-error": "규칙을 내보내기 할 수 없습니다.: {{error}}",
                    "create-new-rule": "새로운 규칙 생성",
                    "rule-file": "규칙 파일",
                    "invalid-rule-file-error": "규칙을 가져오기 할 수 없습니다.: 잘못된 데이터 구조입니다."
                },
                "rule-plugin": {
                    "management": "규칙 및 플러그인 관리"
                },
                "tenant": {
                    "tenants": "테넌트",
                    "management": "테넌트 관리",
                    "add": "테넌트 추가",
                    "admins": "Admins",
                    "manage-tenant-admins": "테넌트 관리자 관리",
                    "delete": "테넌트 삭제",
                    "add-tenant-text": "테넌트 추가",
                    "no-tenants-text": "테넌트가 없습니다.",
                    "tenant-details": "테넌트 상세정보",
                    "delete-tenant-title": "'{{tenantTitle}}' 테넌트를 삭제하시겠습니까?",
                    "delete-tenant-text": "테넌트와 관련된 모든 정보를 복구할 수 없으므로 주의하십시오.",
                    "delete-tenants-title": "{ count, select, 1 {테넌트 1개} other {테넌트 #개} }를 삭제하시겠습니까?",
                    "delete-tenants-action-title": "{ count, select, 1 {테넌트 1개} other {테넌트 #개} } 삭제",
                    "delete-tenants-text": "선택된 테넌트가 삭제되고 관련된 모든 정보를 복구할 수 없으므로 주의하십시오.",
                    "title": "타이틀",
                    "title-required": "타이틀을 입력하세요.",
                    "description": "설명"
                },
                "timeinterval": {
                    "seconds-interval": "{ seconds, select, 1 {1 second} other {# seconds} }",
                    "minutes-interval": "{ minutes, select, 1 {1 minute} other {# minutes} }",
                    "hours-interval": "{ hours, select, 1 {1 hour} other {# hours} }",
                    "days-interval": "{ days, select, 1 {1 day} other {# days} }",
                    "days": "Days",
                    "hours": "Hours",
                    "minutes": "Minutes",
                    "seconds": "Seconds",
                    "advanced": "고급"
                },
                "timewindow": {
                    "days": "{ days, select, 1 { day } other {# days } }",
                    "hours": "{ hours, select, 0 { hour } 1 {1 hour } other {# hours } }",
                    "minutes": "{ minutes, select, 0 { minute } 1 {1 minute } other {# minutes } }",
                    "seconds": "{ seconds, select, 0 { second } 1 {1 second } other {# seconds } }",
                    "realtime": "Realtime",
                    "history": "History",
                    "last-prefix": "last",
                    "period": "from {{ startTime }} to {{ endTime }}",
                    "edit": "타임윈도우 편집",
                    "date-range": "날짜 범위",
                    "last": "Last",
                    "time-period": "기간"
                },
                "user": {
                    "users": "사용자",
                    "customer-users": "커스터머 사용자",
                    "tenant-admins": "테넌트 관리자",
                    "sys-admin": "시스템 관리자",
                    "tenant-admin": "테넌트 관리자",
                    "customer": "커스터머",
                    "anonymous": "Anonymous",
                    "add": "사용자 추가",
                    "delete": "사용자 삭제",
                    "add-user-text": "새로운 사용자 추가",
                    "no-users-text": "사용자가 없습니다.",
                    "user-details": "사용자 상세정보",
                    "delete-user-title": "'{{userEmail}}' 사용자를 삭제하시겠습니까?",
                    "delete-user-text": "사용자와 관련된 모든 데이터를 복구할 수 없으므로 주의하십시오.",
                    "delete-users-title": "{ count, select, 1 {사용자 1명} other {사용자 #명} }을 삭제하시겠니까?",
                    "delete-users-action-title": "{ count, select, 1 {사용자 1명} other {사용자 #명} } 삭제",
                    "delete-users-text": "선택된 사용자가 삭제된고 관련된 모든 데이터를 복구할 수 없으므로 주의하십시오.",
                    "activation-email-sent-message": "활성화 이메일을 보냈습니다!",
                    "resend-activation": "활성화 재전송",
                    "email": "Email",
                    "email-required": "Email을 입력하세요.",
                    "first-name": "이름",
                    "last-name": "성",
                    "description": "설명",
                    "default-dashboard": "기본 대시보드",
                    "always-fullscreen": "항상 전체화면"
                },
                "value": {
                    "type": "Value type",
                    "string": "String",
                    "string-value": "String value",
                    "integer": "Integer",
                    "integer-value": "Integer value",
                    "invalid-integer-value": "Invalid integer value",
                    "double": "Double",
                    "double-value": "Double value",
                    "boolean": "Boolean",
                    "boolean-value": "Boolean value",
                    "false": "False",
                    "true": "True"
                },
                "widget": {
                    "widget-library": "위젯 저장소",
                    "widget-bundle": "위젯 번들",
                    "select-widgets-bundle": "위젯 번들 선택",
                    "management": "위젯 관리",
                    "editor": "위젯 편집기",
                    "widget-type-not-found": "위젯 구성을 로드하는 중 문제가 발생했습니다.<br>연결된 위젯 타입이 삭제되었습니다.",
                    "widget-type-load-error": "다음과 같은 오류로 인해 위젯이로드되지 않았습니다:",
                    "remove": "위젯 삭제",
                    "edit": "위젯 수정",
                    "remove-widget-title": "'{{widgetTitle}}' 위젯을 삭제하시겠습니까?",
                    "remove-widget-text": "위젯과 관련된 모든 데이터를 복구할 수 없으므로 주의하십시오.",
                    "timeseries": "Time series",
                    "latest-values": "Latest values",
                    "rpc": "Control 위젯",
                    "static": "Static 위젯",
                    "select-widget-type": "위젯 타입 선택",
                    "missing-widget-title-error": "위젯 타이틀을 입력하세요!",
                    "widget-saved": "위젯이 저장되었습니다.",
                    "unable-to-save-widget-error": "위젯을 저장할 수 없습니다! 위젯에 오류가 있습니다!",
                    "save": "위젯 저장",
                    "saveAs": "다른 이름으로 위젯 저장",
                    "save-widget-type-as": "다른 이름으로 위젯 타입 저장",
                    "save-widget-type-as-text": "새로운 위젯 이름과 위젯 번들을 선택하세요.",
                    "toggle-fullscreen": "전체화면 전환",
                    "run": "위젯 실행",
                    "title": "위젯 타이틀",
                    "title-required": "위젯 타이틀을 입력하세요.",
                    "type": "위젯 타입",
                    "resources": "리소스",
                    "resource-url": "JavaScript/CSS URI",
                    "remove-resource": "리소스 삭제",
                    "add-resource": "리소스 추가",
                    "html": "HTML",
                    "tidy": "Tidy",
                    "css": "CSS",
                    "settings-schema": "스키마 설정",
                    "datakey-settings-schema": "데이터 키 설정 스키마",
                    "javascript": "Javascript",
                    "remove-widget-type-title": "'{{widgetName}}' 위젯 타입을 삭제하시겠습니까?",
                    "remove-widget-type-text": "위젯 타입과 관련된 모든 데이터를 복구할 수 없으므로 주의하십시오.",
                    "remove-widget-type": "위젯 타입 삭제",
                    "add-widget-type": "새로운 위젯 타입 추가",
                    "widget-type-load-failed-error": "위젯 타입을 로드하지 못했습니다!",
                    "widget-template-load-failed-error": "위젯 템플릿을 로드하지 못했습니다!",
                    "add": "위젯 추가",
                    "undo": "위젯 변경사항 취소",
                    "export": "위젯 내보내기"
                },
                "widgets-bundle": {
                    "current": "현재 번들",
                    "widgets-bundles": "위젯 번들",
                    "add": "위젯 번들 추가",
                    "delete": "위젯 번들 삭제",
                    "title": "타이틀",
                    "title-required": "타이틀을 입력하세요.",
                    "add-widgets-bundle-text": "위젯 번들 추가",
                    "no-widgets-bundles-text": "위젯 번들이 없습니다.",
                    "empty": "위젯 번들이 비어있습니다.",
                    "details": "상세",
                    "widgets-bundle-details": "위젯 번들 상세정보",
                    "delete-widgets-bundle-title": "'{{widgetsBundleTitle}}' 위젯 번들을 삭제하시겠습니까?",
                    "delete-widgets-bundle-text": "위젯 번들과 관련된 모든 데이터를 복구할 수 없으므로 주의하십시오.",
                    "delete-widgets-bundles-title": "{ count, select, 1 {위젯 번들 1개} other {위젯 번들 #개} }를 삭제하시겠습니까?",
                    "delete-widgets-bundles-action-title": "{ count, select, 1 {위젯 번들 1개} other {위젯 번들 #개} } 삭제",
                    "delete-widgets-bundles-text": "선택된 위젯 번들이 삭제되고 관련된 모든 데이터를 복구할 수 없으므로 주의하십시오.",
                    "no-widgets-bundles-matching": "'{{widgetsBundle}}' 와(과) 일치하는 위젯 번들을 찾을 수 없습니다.",
                    "widgets-bundle-required": "위젯 번들을 입력하세요.",
                    "system": "시스템",
                    "import": "위젯 번들 가져오기",
                    "export": "위젯 번들 내보내기",
                    "export-failed-error": "위젯 번들을 내보내기 할 수 없습니다.: {{error}}",
                    "create-new-widgets-bundle": "새로운 위젯 번들 생성",
                    "widgets-bundle-file": "위젯 번들 파일",
                    "invalid-widgets-bundle-file-error": "위젯 번들을 가져오기 할 수 없습니다.: 잘못된 위젯 번들 데이터 구조입니다."
                },
                "widget-config": {
                    "data": "데이터",
                    "settings": "설정",
                    "advanced": "고급",
                    "title": "타이틀",
                    "general-settings": "일반 설정",
                    "display-title": "타이틀 표시",
                    "drop-shadow": "그림자",
                    "enable-fullscreen": "전체화면 사용 ",
                    "background-color": "배경 색",
                    "text-color": "글자 색",
                    "padding": "패딩",
                    "title-style": "타이틀 스타일",
                    "mobile-mode-settings": "모바일 모드 설정",
                    "order": "순서",
                    "height": "높이",
                    "units": "값 옆에 표시할 특수 기호",
                    "decimals": "소수점 이하 자릿수",
                    "timewindow": "타임윈도우",
                    "use-dashboard-timewindow": "대시보드 타임윈도우",
                    "display-legend": "범례 표시",
                    "datasources": "데이터소스",
                    "datasource-type": "유형",
                    "datasource-parameters": "파라미터",
                    "remove-datasource": "데이터소스 삭제",
                    "add-datasource": "데이터소스 추가",
                    "target-device": "대상 디바이스"
                },
                "widget-type": {
                    "import": "위젯 타입 가져오기",
                    "export": "위젯 타입 내보내기",
                    "export-failed-error": "위젯 타입을 내보내기 할 수 없습니다.: {{error}}",
                    "create-new-widget-type": "새로운 위젯 타입 생성",
                    "widget-type-file": "위젯 타입 파일",
                    "invalid-widget-type-file-error": "위젯 타입을 가져오기 할 수 없습니다.: 잘못된 위젯 타입 데이터 구조입니다."
                }
            }
        }
    ).name;