## Cài đặt
git clone https://github.com/LuxionRob/tailwind-seminar.gitcd tailwind-seminar
git branch -r | grep -v '\->' | sed "s,\x1B\[[0-9;]*[a-zA-Z],,g" | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git fetch --all
git pull --all
npm i

## Đặc điểm nổi bật của nó là gì? -> Ví dụ
- Project Introduction
  - Extension
  - Prettier
- Layer
  - Base
  - Components
  - Utilities
- Dark mode
- Configuration
  - Content
  - Theme
  - Screens
  - Colors
  - Spacing
- Pseudo-class
  - Hover
  - Focus
  - Visited
  - Last
  - First

### Demo
- Basic TW
- Basic typography
- Box
- Responsive
- Layout
- Animation
- Configuration
- Plugin
- Preset

## Nhược điểm hiện tại của nó là gì? -> Minh hoạ
- Cần thời gian để học(giảm tốc độ code lúc ban đầu)
- Code xấu
- Thiếu component miễn phí được build sẵn
- Kích cỡ file HTML lớn
- Khó thiết lập một số thuộc tính CSS
  - Transition
  - Animation
- Không phân tách style và content ra những mục riêng lẽ

## Một số hệ thống web đang sử dụng nó, để thấy nó phù hợp với hệ thống web nào?
top10.netflix.com
bobbyhadz.com
swiperjs.com

- Hệ thống được build bởi những người có kinh nghiệm
- Hệ thống ít animation

## Question
- Multiple pseudo-class
- How to change placeholder to ...?
