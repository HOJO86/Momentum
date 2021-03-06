const qoutes = [
    {
        qoute: "죽고 싶다는 말은\n\n거꾸로 이야기하면 이렇게 살고 싶지 않다는 거고,\n\n이 말은 다시 거꾸로 뒤집으면 잘 살고 싶다는 거고,\n\n그러니까 우리는 죽고 싶다고 말하는 대신\n\n잘 살고 싶다 말해야 돼.\n\n죽음에 대해 말하지 말아야 하는 건,\n\n생명(生命)이라는 말의 뜻이\n\n살아있으라는 명령이기 때문이야.",
        author: " - 떠난 후에 남겨진 것들 중에서",
    },
    {
        qoute: "인생에는 정답이 없다.\n\n내가 내린 경정이 어떤 결과를 가져올지\n\n어느 누구도 장담할 수 없다.\n\n선택과 결정이라는 행위 자체에 대한\n\n심적 부담감을 줄이기 위해\n\n그 행위를 하는 순간순간의\n\n나를 믿는 것이 가장 현명한 방법이다.",
        author: " - 선택과 결정은 타이밍이다 중에서",
    },
    {
        qoute: "당신과 나, 우리 모두는 소중한 존재다.\n\n내가 살아있다는 사실만으로도 고마워하는 사람이 있다.\n\n단지 우리가 모르고 있을 뿐.",
        author: " - 떠난 후에 남겨진 것들 중에서",
    },
    {
        qoute: "혼자 있는 시간에는\n\n과감하게 자신을 절대적인 대상으로 파악할 필요가 있다.\n\n남과 비교하지 않고,\n\n오로지 자기만의 기준으로 자신을 판단할 줄 알아야\n\n다른 사람의 기준에 휘둘리지 않을 수 있다.",
        author: " - 혼자있는 시간의 힘 중에서",
    },
    {
        qoute: "꼭 기억했으면 하는 사실 하나,\n\n우리가 무심코 지나쳐온 다양한 죽음 속에는\n\n언젠가 내가 맞닥뜨릴지도 모를 하루가,\n\n나의 사랑하는 가족이 겪을지도 모를 오늘이,\n\n지금 내 옆에 살고 있는\n\n우리 이웃들의 이야기가 담겨 있다는 사실.",
        author: " - 떠난 후에 남겨진 것들 중에서",
    },
    {
        qoute: "저속하고 지루한 친구보다는 충실한 고독이 낫다.\n\n혼자 있는 것, 이것이야말로 생의 근원이다.",
        author: " - 나의 생명 밝은 달빛에 불타오르고 중에서",
    },
    {
        qoute: "포기하려던 삶을 부여잡고 다시 시작할 수 있게 하는 것은\n\n거창한 도움이 아니라\n\n당신은 소중한 사람이라는 사실을\n\n일깨워주는 것만으로 충분하다.\n\n작은 배려와 친절을 통해 가능한 일이다.",
        author: " - 떠난 후에 남겨진 것들 중에서",
    },
    {
        qoute: "내 인생의 주인공은 어느 누구도 아닌 나다.\n\n다른 사람이 내 인생을 대신 살아줄 수는 없다.",
        author: " - 선택과 결정은 타이밍이다 중에서",
    },
    {
        qoute: "도저히 이겨낼 수 없을 것 같은 절망에 맞닥뜨렸을 때,\n\n아무리 애를 써도 누군가를 용서할 수 없을 때,\n\n그래서 오늘이 마기막이었으면 하는 극단적인 바람이 들 때,\n\n그럴 때 나는 당신이 호스피스 병동을 찾았으면 한다.\n\n죽음은 그 모든 문제에 정답을 가지고 있다.",
        author: " - 천 번의 죽음이 내게 알려준 것들 중에서",
    },
    {
        qoute: "내 인생의 주인공으로 살아가기 위해\n\n반드시 큰 계기가 있어야 하는 것은 아니다.\n\n중요한 것은\n\n나의 선택과 그 선택을 한 나 자신을 믿는 것이다.",
        author: " - 선택과 결정은 타이밍이다 중에서",
    },
];

const qoute = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQoute = qoutes[Math.floor(Math.random() * qoutes.length)];

qoute.innerText = todayQoute.qoute;
author.innerText = todayQoute.author;