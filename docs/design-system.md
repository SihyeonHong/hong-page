# 디자인 시스템

## 원칙

- CSS에서 절대값을 직접 하드코딩하지 않습니다. 디자인 시스템의 토큰을 사용합니다.
- 디자인 시스템을 먼저 결정하는 것이 아니라, 구현하면서 결정된 내용을 디자인 시스템에 반영합니다.
- 클래스네임에는 Tailwind 유틸리티 클래스를 사용하는 것을 권장합니다. 필요하다면 커스텀 클래스를 사용할 수 있으나, 그보다는 공통 컴포넌트로 만드는 편이 좋습니다.

## CSS 파일 구조

```
src/
  styles/
    globals.css
```

- 모든 CSS 파일은 `src/styles` 폴더 안에 위치시킵니다.
- CSS import는 `app/layout.tsx`에서 `globals.css` 하나만 import하는 것을 원칙으로 합니다.
- 모든 CSS 코드는 `globals.css`에 작성하며, 필요시 파일을 분리한 후 `globals.css`에서 import하는 방식으로 관리합니다. 분리된 파일도 마찬가지로 같은 폴더에 위치합니다.

## 디자인 토큰 추가 규칙

새로운 디자인 토큰을 추가할 때는 다음 절차를 따릅니다:

1. 토큰 타입 결정: 색상, 간격, 타이포그래피 등 어떤 타입인지 확인
2. 네이밍 컨벤션 확인: 네이밍 컨벤션에 따라 적절한 이름 결정
3. `@theme` 블록, 그리고 필요하다면 `:root`나 `.dark` 블록에 규칙대로 추가

## CSS 코드 작성 순서

### `globals.css`

#### 1. 전역 리소스

전역에서 사용되는 라이브러리와 리소스는 파일 상단에 위치합니다.

- 폰트 CDN
- `@import "tailwindcss";`

#### 2. `@theme` 블록

`@theme`는 Tailwind CSS v4의 디렉티브로, CSS 변수를 Tailwind 유틸리티 클래스로 변환합니다.

1. 라이트/다크 모드 공통 토큰 (간격, 폰트 크기 등)
2. 라이트 모드 전용 토큰
3. 다크 모드 전용 토큰

순서로 토큰을 정의합니다.

- 공통 토큰은 `@theme` 블록에서 직접 값을 정의합니다.
- 라이트/다크 모드 영향을 받는 토큰은 `var()`로 참조하여 현재 모드에 따라 자동으로 올바른 값이 적용되도록 합니다.

##### Tailwind 유틸리티 클래스 사용법

`@theme` 블록에 정의한 토큰은 다음과 같이 Tailwind 유틸리티 클래스로 사용할 수 있습니다.

- 폰트: `--font-family-sans` → `font-sans` 클래스
- **색상**: `--color-background` → `bg-background`, `text-background` 클래스
- **간격**: `--spacing-md` → `p-md`, `m-md`, `gap-md` 등 클래스

#### 3. `:root` 블록 - 라이트 모드 전용 토큰

라이트 모드에서만 사용되는 토큰들을 정의합니다. 주로 색상 토큰이 여기에 포함됩니다.

#### 4. `.dark` 블록 - 다크 모드 전용 토큰

다크 모드에서만 사용되는 토큰들을 정의합니다. 주로 색상 토큰이 여기에 포함됩니다.

## 디자인 토큰 네이밍 컨벤션

### 색상 (Color)

형식: `--color-{의미}-{변형}`

예시:

- `--color-primary-500`: 주요 색상 (500 단계)
- `--color-background-base`: 기본 배경색
- `--color-text-primary`: 주요 텍스트 색상
- `--color-text-secondary`: 보조 텍스트 색상
- `--color-border-default`: 기본 테두리 색상

**Tailwind 색상 참조 규칙:**
색상 토큰은 이미 검증된 색상 체계를 활용하기 Tailwind CSS의 기본 색상 팔레트에서 선택하는 것을 권장합니다. 이렇게 토큰을 정의할 시 해당하는 Tailwind 색상명을 주석으로 명시해야 합니다.

```css
/* 예시 */
--color-text-primary: #1c1917; /* stone-900 */
```

### 간격 (Spacing)

Tailwind CSS의 기본 spacing scale을 사용합니다. 커스텀 spacing 토큰은 `@theme` 블록에 정의하지 않으며, Tailwind 기본 클래스를 직접 사용합니다.

#### Tailwind 기본 spacing 매핑

- `4` = 16px (md)
- `6` = 24px (lg)
- `8` = 32px (xl)

#### 사용 규칙

- 레이아웃 요소 수평 패딩 (헤더, 푸터 등): `px-8` (xl)
- 레이아웃 요소 수직 패딩 (헤더, 푸터 등): `py-4` (md)
- 네비게이션 요소 간 간격: `gap-6` (lg)

### 타이포그래피 (Typography)

Tailwind CSS의 기본 타이포그래피 scale을 사용합니다. 커스텀 타이포그래피 토큰은 `@theme` 블록에 정의하지 않으며, Tailwind 기본 클래스를 직접 사용합니다.

#### 사용 규칙

(아직 정의된 규칙 없음 - 컴포넌트 구현 시 추가)

### 둥근 모서리 (Border Radius)

Tailwind CSS의 기본 border radius scale을 사용합니다. 커스텀 radius 토큰은 `@theme` 블록에 정의하지 않으며, Tailwind 기본 클래스를 직접 사용합니다.

#### 사용 규칙

(아직 정의된 규칙 없음 - 컴포넌트 구현 시 추가)

### 그림자 (Shadow)

Tailwind CSS의 기본 shadow scale을 사용합니다. 커스텀 shadow 토큰은 `@theme` 블록에 정의하지 않으며, Tailwind 기본 클래스를 직접 사용합니다.

#### 사용 규칙

- 레이아웃 요소 그림자 (헤더, 카드 등): `shadow-sm`
