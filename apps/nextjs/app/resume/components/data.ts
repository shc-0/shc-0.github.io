export const SUMMARY = [""]

export const HARD_SKILLS = [
	"React/Next.js/SSR/SSG/TypeScript등의 키워드를 중심으로 한 모던 프론트엔드 스택/패러다임에 익숙합니다.",
	"코드의 UI적 측면을 중요하게 생각하고 읽고 사용하기 쉽고 변경에 유연한 코드를 작성하기 위해 힘씁니다.",
	"참여, 리딩, 단독, 초기 개발, 유지 보수, 마이그레이션, 재작성 등 다양한 형태의 프로젝트 경험이 있습니다.",
	"영문 자료를 원활하게 활용하며 다양한 루트를 통한 정보 습득에 빠릅니다.",
	"프로젝트의 기술적 결정에 주도적으로 참여하고, 팀의 개발 환경을 개선하는 데 기여합니다.",
]

export const SOFT_SKILLS = [
	"분석/가설/실행/검증 사이클에 익숙하고 최소 실행 단계를 파악/제안하여 빠른 실행을 돕습니다.",
	"기존 UI/UX, 혹은 기획/디자인에서 보완할 점들을 발견하고 개선안을 제시합니다.",
	"최초 의견을 고집하지 않고 상황에 따라 적절한 절충안을 도출합니다.",
	"개발 외 분야(음악/영상/디자인 등)에서의 다양한 직업/비직업적 경험을 바탕으로 다른 직군의 동료들과 원활하게 소통합니다.",
	"감정적으로 포용적인 환경을 만들고 동료들의 심리적 안전감을 높입니다.",
]

export const ETC_EXPERIENCES = [
	"영화 연출을 전공하였고, 영화/음악/디자인 등 다양한 분야에서 직업/비직업적 경험이 있습니다.",
	"DJ 파티를 기획하며 분석/가설/실험/검증의 프로세스를 통해 파티의 장르와 분위기 등을 피벗해 평균 관객수를 한자리에서 세자리 이상으로 늘린 경험이 있습니다.",
]

export const WORK_EXPERIENCE = [
	{
		company: "(주) 모노랩스",
		period: "2020. 12 ~ 2023. 6",
		summary:
			"서비스 및 백오피스 등 프론트엔드 개발이 필요한 모든 부분의 개발에 참여했습니다. 기술 리서치 및 적용, 문서화, 미팅 방식 개발, 회고 프로세스 도입, 신입 개발자 온보딩 과정 개발 등 팀의 전체적인 개발 경험 개선 및 조직 문화 형성에도 기여하였습니다.",
		achievements: [
			"프로젝트/피처를 리드 혹은 단독으로 개발하는 능력.",
			"기술 선택, 개발 방식, 메인터너블한 코드 구조 등에 대한 더 깊은 이해.",
			"덩어리가 너무 큰 기획을 점진적으로 실행 가능한 단위로 나누고, 최초 문제 정의에 숨어있는 '진짜' 문제를 찾아내는 경험.",
			"일반적인 FE 엔지니어의 업무 scope을 넘어, 기획/디자인 단계 등 더 넓은 영역에서 기여하는 능력.",
			"좋은 UI는 프로덕트 조직 전체 align의 문제라는 인식.",
			"팀 빌딩에 관심과 역량, 감정적으로 포용적인 환경의 중요성에 대한 인식과 실제로 그런 환경을 만들어 본 경험.",
		],
		shortcomings: [
			"넓은 범위에 능력이 있고 기여가 가능하다는 사실을 좀 더 빨리 알았다면, 보다 적극적으로 기여가 가능한 환경이었다면 어땠을까 하는 아쉬움.",
		],
	},
	{
		company: "(주) 버드뷰",
		period: "2018. 7 ~ 2020. 12",
		summary:
			"부트캠프의 취업 프로그램을 통한 인턴으로 시작하여 정직원으로 채용되었습니다. 광고, 마케팅, 커머스 등 사업팀이 사용하는 어드민, 화해 앱 내 쇼핑 기능 관련 웹뷰 영역 등의 개발에 참여하며 프론트엔드 개발자로서 기본적인 능력을 갖췄습니다.",
		achievements: [
			"프론트엔드 개발자로서의 기본적인 능력.",
			"복잡한 어드민 UI 개발 및 사용자 피드백에 의한 개선을 통해 UI/UX에 대한 이해.",
			"jquery 등으로 이루어져있는 레거시 프로젝트를 유지보수하며 얻은 HTML/CSS/JS/DOM API 등 대한 이해.",
		],
		shortcomings: [
			"성급한 추상화, 너무 많은 걸 알고 있는 컴포넌트등의 개발 오류들.",
			"그로 인해 스스로 불러온 재앙 역시 많이 경험하여, 미래에 나를 괴롭게 할 코드에 대한 감각을 얻게 되었습니다.",
		],
	},
]

export const MONO_PROJECTS = [
	{
		title: "IAM 웹사이트",
		period: "2020.12 ~ 현재",
		summary:
			"영양제 구입을 위한 상담 설문, 영양제 쇼핑 기능, 브랜딩용 블로그, 회원 가입 및 계정 관리 기능 등을 갖고 있는 복합적인 웹서비스",
		whatIDid:
			"퍼포먼스 문제를 Gatsby.js를 도입하여 구조적으로 해결할 바탕을 만들었습니다. 프레임워크 선정부터 배포 환경 설정까지 각종 기술적 결정을 내리고 변경에 유연한 컴포넌트/코드 구조를 리서치하고 제안하여 팀의 개발 환경을 개선하는 데 기여하고, 근본적인 해결책을 고민하며 기획 및 조직 전반에 이르는 관심사를 갖게 되었습니다.",
		challenge:
			"초기에 사용되고 있던 외주 제작 웹페이지의 퍼포먼스 문제,  잦은 요구사항 변경 및 예상하지 못한 기능 추가 등",
		techStack:
			"Gatsby.js, Typescript, Stitches, Radix UI, Jotai, React Hook Form, Zod, etc.",
	},
	{
		title: "화상상담 웹앱 Next.js 재작성",
		period: "2022. 9 ~ 2023. 1",
		summary:
			"카카오 알림톡 링크를 열어 앱 내 브라우저를 통해 영양사와 화상상담을 진행하는 웹앱",
		whatIDid:
			"기존 코드를 분석하고 히스토리를 아는 동료들과 인터뷰 및 시연 등을 진행하여 요구사항을 문서화하고, 안정화 기간을 지정해 테스트 항목을 보강하고 최종적으로 배포에 성공하였습니다. 이후 문서 부재로 인한 문제가 발생하지 않도록 관련 기록을 정리하여 문서화하였습니다.",
		challenge:
			"기존 프로젝트의 코드 파악이 쉽지 않은 데다 기획/디자인 등 관련 문서도 전혀 남아있지 않아 어려움을 겪었던 프로젝트입니다. 유저 사이드는 웹앱인데 상담사용 앱은 iOS로 개발되어 있는 등, 요구사항의 파악을 위해 거쳐야 하는 과정이 쉽지 않았습니다.",
		techStack:
			"Next.js, Jotai, TailwindCSS, Agora Video Calling API, Firestore, etc.",
	},
	{
		title: "우주약방 병원/의사용 어드민 개발",
		period: "2021. 12 ~ 2022. 5",
		summary: "비대면 진료 예약 시스템의 의사/병원용 웹 어드민",
		whatIDid:
			"시험적으로 배포 플랫폼을 vercel로 옮겨 빠르게 피드백을 주고 받으며 개발을 진행하였습니다. 다양한 컴포넌트 조합 패턴과 headless 방식의 UI 라이브러리의 중요성을 알게 되었고, 팀 내에서 최초로 Next.js를 기반으로 프로젝트를 완료해 본 경험으로 이후 다양한 백오피스 작업을 효율적으로 진행하는 데 기여할 수 있었고, 프로젝트를 주도적으로 진행해 본 경험이 쌓이면서 좀 더 자신감이 붙게 된 계기가 되기도 했습니다.",
		challenge:
			"계열사의 인력 부족으로 인해 파견되었던 프로젝트로, 역시 인력 부족으로 인해 고용된 베트남 개발사의 외주 인력과 리모트로 협업을 진행했으나, 결과적으론 혼자 대부분의 기능을 개발하게 되었습니다. 계속해서 변경되는 기획 사항 대응도 어려운 부분이었습니다.",
		techStack:
			"Next.js, NextAuth.js, Redux Toolkit, RTK Query, Stitches, Radix UI, Firestore, Vercel",
	},
]

export const BIRDVIEW_PROJECTS = [
	{
		title: "화해 앱 내 커머스 영역 웹뷰 리뉴얼",
		period: "2020. 5 ~ 2020.12",
		summary: "화해앱 내부의 웹뷰로 구성된 쇼핑 관련 영역",
		whatIDid:
			"비슷한 시기에 입사하신 시니어 개발자의 리드로 팀 전체가 React와 TypeScript를 학습하며 진행했습니다. 작은 단위의 컴포넌트를 개발하는 것부터 시작해 전체 프로젝트를 완성하는 경험을 할 수 있었습니다.",
		techStack: "Next.js, Mobx, mobx-state-tree, Material UI",
	},
	{
		title: "광고 어드민 개발",
		period: "2018. 7 ~ 2020. 5",
		summary: "광고팀과 고객사가 광고 집행을 위해 사용하는 백오피스 웹서비스",
		whatIDid:
			"스타일링 관련 난관을 자주 겪었으나 어떻게든 해결이 되긴 된다는 걸 알게 됐고, 스타일이 포함된 컴포넌트 라이브러리의 단점, 개선을 위해 필요한 요건들에 대해 어렴풋이 알게 된 경험이었던 것 같습니다. 그 외에도 커리어 극초반이라 모든 게 어설펐지만 생각지 못한 UI 상태의 경우의 수를 경험하면서 UI 개발에 매력을 더 느끼게 되기도 했습니다. 후반엔 특정 부분에 유닛 테스트 등을 추가하거나 동료들과 타입스크립트 도입을 추진하는 등,  코드의 안정성을 위한 노력을 하기도 했습니다.",
		challenge:
			"스타일링이 외주 퍼블리셔에 의해 작업 되어있었고, Vuetify가 사용되고 있었으나 디자인 요구사항은 꽤 자세한 편이어서 충돌을 뚫고 커스텀 스타일을 적용하기가 까다로웠습니다.",
		techStack: "Nuxt.js, Vue, Vuex, Vuetify",
	},
]

export const PERSONAL_EXPERIENCES = [
	{
		title: "seoul-metal.com",
		period: "2020. 9 ~ 2020. 10",
		summary: "배우자가 운영하는 cafe24기반 쇼핑몰",
		whatIDid:
			"로컬에 ftp storage를 클론한 다음 Webpack 기반으로 watcher를 두어 변경은 src 폴더 내부에서 TypeScript, PostCSS로만 하고, 해당 파일 변경시 로컬의 타겟 파일에 빌드하면서 vscode의 sftp 관련 익스텐션을 이용해 ftp에도 업로드 하는 빌드 시스템을 만들어 git으로 버전 관리가 가능하도록 했습니다.",
		challenge:
			"백엔드 코드를 액세스 할 수 없고, ftp 업로드만 사용가능해 github 기반의 배포도 불가능하고, 테스트 배포도 직접적으론 불가능하고, TypeScript, PostCSS 등 모던 툴링도 직접적으로 사용할 수 없는 총체적으로 쉽지 않은 상황.",
		techStack: "TypeScript, PostCSS, Webpack",
	},
]

const STRENGTH = [
	`프로덕트와 유저 사이에 난 틈을 해결하는 일이라는 점에서 UI 개발에 매력을
			느끼고, 문제를 파악하고 해결하는 과정에서 즐거움을 얻습니다.`,
	`코드도
			나와 동료, 프로덕트 사이의 UI라는 점을 중요하게 생각하고, 소통 및 사용성에
			중점을 두고 작성하기 위해 끊임없이 노력합니다.`,
	`영상, 음악, 디자인 등
			다양한 직업/경험적 배경을 갖고 있으며, 직군 간의 경계가 뚜렷하지 알고,
			협업 가능성에 제한을 두지 않습니다.`,
	`조직 문화의 중요성을 이해하며,
			동료들의 심리적 안전감을 위해 적극적으로 행동합니다.`,
	`리드, 참여, 최초
			개발, 유지 보수, 재작성, 마이그레이션, 레거시 관리 등 다양한 형태의
			프로젝트 경험을 가지고 있습니다.`,
	`영어 문서 및 동영상 자료들을
			적극적으로 활용하며, 최신의 흐름과 기반 지식 모두에 관심을 두고 있습니다`,
	`React/TypeScript/Next.js/SSR/SSG 등의 키워드로 대표되는 모던 프론트엔드
			스택/패러다임에 익숙합니다`,
]

const PROJECTS = {
	BIRDVIEW: {
		commerce: {
			headline: "화해 앱 내 커머스 영역 웹뷰 리뉴얼",
			period: "2020. 5 ~ 2020.12",
			description:
				"PHP Backend + template 기반의 기존 구조를 리뉴얼하며 Next.js/Typescript로 재작성한 프로젝트로, 업무에서 React와 TypeScript를 활용한 첫번째 프로젝트였습니다.",
			challenge: "",
			achievements:
				"당시 프로젝트를 기점으로 입사한 시니어 개발자분의 주도로 작은 단위의 재사용 가능한 컴포넌트들부터 개발해서 프로젝트 완료까지 진행해 보는 경험을 얻을 수 있었습니다. 리액트가 처음인 팀원들이 있어서 학습을 돕는 역할에 적극적으로 참여하였습니다.",
			findings: "",
			techStack: "Next.js, Mobx, mobx-state-tree, Material UI",
		},
		ad: {
			headline: "광고 어드민 개발",
			period: "2018. 7 ~ 2020. 10",
			description:
				"광고팀과 고객사가 광고 집행을 위해 사용하는 백오피스 웹서비스로, 기존에 서버 개발자들이 풀스택으로 개발 중이던 프로젝트를 프론트엔드 팀이 생기며 이어받아 개발하게 되었습니다.",
			challenge:
				"스타일링이 외주 퍼블리셔에 의해 작업 되어있었고, Vuetify가 사용되고 있었으나 디자인 요구사항은 꽤 자세한 편이어서 충돌을 뚫고 커스텀 스타일을 적용하기가 까다로웠습니다.",
			achievements:
				"스타일링 관련한 난관을 자주 겪었으나 어떻게든 해결이 되긴 된다는 걸 알게 됐고, headless 컴포넌트 등 재활용의 중요성과 그를 위해 필요한 요건들에 대해 어렴풋이 알게 된 경험이었던 것 같습니다. 그 외에도 커리어 극초반이라 모든 게 어설펐지만 생각지 못한 UI 상태의 경우의 수를 경험하면서 UI 개발에 매력을 더 느끼게 되기도 했습니다. 후반엔 특정 부분에 유닛 테스트 등을 추가하거나 동료들과 타입스크립트 도입을 추진하는 등,  코드의 안정성을 위한 노력을 하기도 했습니다.",
			findings: "",
			techStack: "Nuxt.js, Vue, Vuex, Vuetify",
		},
		etc: {
			headline:
				"그 외 다양한 레거시/Nuxt, Vue 기반의 각종 어드민 개발 및 유지보수 경험",
		},
	},
	MONOLABS: {
		iam: {
			headline: "IAM 메인 웹사이트 iam-iam.com",
			period: "2020.12 ~ 현재",
			description:
				"IAM 서비스의 메인 웹사이트로,  영양제 구입을 위한 상담 설문,  영양제 구입 관련 쇼핑 기능, 브랜딩용 블로그 기능,  회원 가입 및 계정 관리 기능 등을 갖고 있는 복합적인 웹서비스입니다.",
			challenge:
				"초기에 사용되고 있던 외주 제작 웹페이지의 퍼포먼스 문제,  잦은 요구사항 변경 및 예상하지 못한 기능 추가 등",
			achievements:
				"프레임워크 선정부터 배포 환경 설정까지 각종 기술적 결정에 주도적인 역할을 하였습니다. 변경에 유연한 컴포넌트 설계 방법을 리서치/제안/공유하고 공동으로 학습하는 과정을 진행했으며, 커스텀이 어려운 라이브러리는 headless 방식의 라이브러리로 교체하는 등, 팀의 개발 환경을 개선하는 데 기여하였습니다. 자주 바뀌는 요구 사항에 대응하는 과정에서 기획/디자인 과정에 참여하는 것의 중요성을 알게 되었고, 기여할 부분을 찾아 효율적인 프로세스를 만들기 위해 노력하였습니다.",
			findings: "",
			techStack:
				"Gatsby.js, Typescript, Stitches, Radix UI, Jotai, React Hook Form, Zod, etc.",
		},
		video: {
			headline: "화상상담 웹앱 Next.js 재작성",
			period: "2022. 9 ~ 2023. 1",
			description:
				"유저가 카카오 알림톡 링크를 열어 앱 내 브라우저를 통해 영양사와 화상상담을 진행하는 웹앱. 기존 프로젝트가 매우 급하게 진행된 데다 관련자가 모두 퇴사한 이후라, 기능 변경 등의 이슈에 대응하기 어려워 재작성이 필요하다고 판단하여 진행한 프로젝트입니다.",
			challenge:
				"기존 프로젝트의 코드 파악이 쉽지 않은 데다 기획/디자인 등 관련 문서도 전혀 남아있지 않아 어려움을 겪었던 프로젝트입니다. 유저 사이드는 웹앱인데 상담사용 앱은 iOS로 개발되어 있는 등, 요구사항의 파악을 위해 거쳐야 하는 과정이 쉽지 않았습니다.",
			achievements:
				"히스토리를 아는 동료들과 인터뷰/시연 세션을 진행하여 요구 사항과 플로우차트 등 관련 문서를 새로 만들어 개발을 진행했으며, 테스트 배포 후 안정화 과정을 거치며 테스트 케이스를 보강해 이후엔 같은 문제가 발생하지 않도록 자세한 문서/기록을 남겨두었습니다. 문서 기반이 없는 상태에서 성공적으로 프로젝트를 마무리한 경험,  video call 관련 기능을 개발해 본 경험을 얻었습니다.",
			techStack: "Next.js, Jotai, Agora SDK, Firestore",
		},
		space: {
			headline: "우주약방 병원/의사 어드민 개발",
			period: "2021. 12 ~ 2022. 5",
			description:
				"비대면 진료 솔루션을 개발하는 계열사 의사/병원용 어드민 웹앱. 회원가입, 회원 정보 관리, firebase를 통해 실시간으로 업데이트되는 진료 신청 리스트 페이지, 진료 일정 등의 관리를 위한 디테일 페이지 등을 개발하였습니다.",
			challenge:
				"계열사의 인력 부족으로 인해 파견(?)된 프로젝트로, 역시 인력 부족으로 인해 고용된 베트남 개발사의 외주 인력과 리모트로 협업을 진행했으나, 결과적으론 혼자 대부분의 기능을 개발하게 됩니다.",
			achievements:
				"팀 내에서 최초로 Next.js를 기반으로 프로젝트를 완료해 본 경험을 얻게 되어 이후 다양한 백오피스 작업을 효율적으로 진행하는 데 기여할 수 있었고, vercel로 배포 플랫폼을 옮기게 된 계기가 되기도 했습니다. 프로젝트를 주도적으로 진행해 본 경험이 쌓이면서 좀 더 자신감이 붙게 된 계기가 되기도 했습니다.",
			techStack:
				"Next.js, NextAuth.js, Redux Toolkit, RTK Query, Firestore, Vercel",
		},
	},
}
