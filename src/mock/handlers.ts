import { http, HttpResponse } from "msw";
import { GameMate } from "../config/types";

const local = "http://localhost:3000";

const mateData: Record<string, GameMate[]> = {
  "1": [
    {
      id: 1,
      nickname: "Summoner123",
      email: "summoner123@example.com",
      gender: "male",
      description: "즐겁게 게임할 파트너를 찾고 있습니다.",
      birthday: "1995-08-15",
      profile_image: "https://picsum.photos/200/300?random=1",
      is_online: true,
      game_id: 1,
      level: "Diamond",
      price: 9999,
      average_rating: 4,
      amount: 500,
    },
    {
      id: 2,
      nickname: "ChampionMaster",
      email: "championmaster@example.com",
      gender: "female",
      description: "챔피언 마스터와 함께 게임을 즐겨보세요.",
      birthday: "1998-04-22",
      profile_image: "https://picsum.photos/200/300?random=2",
      is_online: false,
      game_id: 1,
      level: "Platinum",
      price: 8000,
      average_rating: 5,
      amount: 300,
    },
    {
      id: 3,
      nickname: "AggressivePlayer",
      email: "aggressiveplayer@example.com",
      gender: "male",
      description: "공격적인 플레이 스타일을 선호합니다.",
      birthday: "1991-06-11",
      profile_image: "https://picsum.photos/200/300?random=9",
      is_online: true,
      game_id: 1,
      level: "Gold",
      price: 7500,
      average_rating: 3,
      amount: 200,
    },
    {
      id: 4,
      nickname: "MysticMage",
      email: "mysticmage@example.com",
      gender: "female",
      description: "마법을 다루는 데 능숙합니다.",
      birthday: "1997-09-29",
      profile_image: "https://picsum.photos/200/300?random=10",
      is_online: false,
      game_id: 1,
      level: "Silver",
      price: 6000,
      average_rating: 4,
      amount: 150,
    },
    {
      id: 5,
      nickname: "FastRunner",
      email: "fastrunner@example.com",
      gender: "male",
      description: "빠른 이동과 전략적 공격을 자랑합니다.",
      birthday: "1994-01-15",
      profile_image: "https://picsum.photos/200/300?random=11",
      is_online: true,
      game_id: 1,
      level: "Platinum",
      price: 9000,
      average_rating: 4,
      amount: 250,
    },
    {
      id: 6,
      nickname: "GuardianAngel",
      email: "guardianangel@example.com",
      gender: "female",
      description: "팀원 보호와 서포트에 탁월합니다.",
      birthday: "1996-05-24",
      profile_image: "https://picsum.photos/200/300?random=12",
      is_online: false,
      game_id: 1,
      level: "Diamond",
      price: 10000,
      average_rating: 5,
      amount: 400,
    },
  ],
  "2": [
    {
      id: 7,
      nickname: "TeamStrategist",
      email: "teamstrategist@example.com",
      gender: "male",
      description: "팀 전략에 능숙한 플레이어를 찾습니다.",
      birthday: "1993-10-10",
      profile_image: "https://picsum.photos/200/300?random=3",
      is_online: true,
      game_id: 2,
      level: "Gold",
      price: 7000,
      average_rating: 3,
      amount: 200,
    },
    {
      id: 8,
      nickname: "TacticianGamer",
      email: "tacticiangamer@example.com",
      gender: "female",
      description: "전략 게임을 사랑하는 분들을 위해.",
      birthday: "1997-12-30",
      profile_image: "https://picsum.photos/200/300?random=4",
      is_online: false,
      game_id: 2,
      level: "Silver",
      price: 6000,
      average_rating: 4,
      amount: 100,
    },
    {
      id: 9,
      nickname: "Commander",
      email: "commander@example.com",
      gender: "male",
      description: "팀원들을 지휘하는 데 능숙합니다.",
      birthday: "1992-03-25",
      profile_image: "https://picsum.photos/200/300?random=13",
      is_online: true,
      game_id: 2,
      level: "Platinum",
      price: 8500,
      average_rating: 5,
      amount: 300,
    },
    {
      id: 10,
      nickname: "SneakyFox",
      email: "sneakyfox@example.com",
      gender: "female",
      description: "적을 기습하는 플레이를 즐깁니다.",
      birthday: "1998-06-18",
      profile_image: "https://picsum.photos/200/300?random=14",
      is_online: false,
      game_id: 2,
      level: "Gold",
      price: 7500,
      average_rating: 4,
      amount: 200,
    },
    {
      id: 11,
      nickname: "ShieldBearer",
      email: "shieldbearer@example.com",
      gender: "male",
      description: "방어와 서포트를 전문으로 합니다.",
      birthday: "1995-08-12",
      profile_image: "https://picsum.photos/200/300?random=15",
      is_online: true,
      game_id: 2,
      level: "Silver",
      price: 6500,
      average_rating: 3,
      amount: 150,
    },
    {
      id: 12,
      nickname: "Mastermind",
      email: "mastermind@example.com",
      gender: "female",
      description: "모든 전략을 구상하고 실행합니다.",
      birthday: "1999-02-05",
      profile_image: "https://picsum.photos/200/300?random=16",
      is_online: false,
      game_id: 2,
      level: "Diamond",
      price: 9500,
      average_rating: 5,
      amount: 350,
    },
  ],
  "3": [
    {
      id: 13,
      nickname: "BattleExpert",
      email: "battleexpert@example.com",
      gender: "male",
      description: "배틀 그라운드에서의 최고의 경험을 제공합니다.",
      birthday: "1996-07-14",
      profile_image: "https://picsum.photos/200/300?random=5",
      is_online: true,
      game_id: 3,
      level: "Platinum",
      price: 10000,
      average_rating: 5,
      amount: 400,
    },
    {
      id: 14,
      nickname: "SniperQueen",
      email: "sniperqueen@example.com",
      gender: "female",
      description: "정확한 조준과 신속한 움직임을 자랑합니다.",
      birthday: "1994-03-18",
      profile_image: "https://picsum.photos/200/300?random=6",
      is_online: false,
      game_id: 3,
      level: "Gold",
      price: 9000,
      average_rating: 4,
      amount: 350,
    },
    {
      id: 15,
      nickname: "GrenadeKing",
      email: "grenadeking@example.com",
      gender: "male",
      description: "수류탄 사용에 능숙합니다.",
      birthday: "1995-11-22",
      profile_image: "https://picsum.photos/200/300?random=17",
      is_online: true,
      game_id: 3,
      level: "Silver",
      price: 7000,
      average_rating: 3,
      amount: 200,
    },
    {
      id: 16,
      nickname: "StealthAssassin",
      email: "stealthassassin@example.com",
      gender: "female",
      description: "은밀히 적을 제거하는 것을 좋아합니다.",
      birthday: "1993-05-10",
      profile_image: "https://picsum.photos/200/300?random=18",
      is_online: false,
      game_id: 3,
      level: "Gold",
      price: 8000,
      average_rating: 4,
      amount: 250,
    },
    {
      id: 17,
      nickname: "BulletStorm",
      email: "bulletstorm@example.com",
      gender: "male",
      description: "강력한 화력을 자랑합니다.",
      birthday: "1997-08-04",
      profile_image: "https://picsum.photos/200/300?random=19",
      is_online: true,
      game_id: 3,
      level: "Platinum",
      price: 9500,
      average_rating: 5,
      amount: 300,
    },
    {
      id: 18,
      nickname: "ScoutLeader",
      email: "scoutleader@example.com",
      gender: "female",
      description: "정찰과 정보 수집을 전문으로 합니다.",
      birthday: "1998-01-27",
      profile_image: "https://picsum.photos/200/300?random=20",
      is_online: false,
      game_id: 3,
      level: "Diamond",
      price: 10500,
      average_rating: 5,
      amount: 400,
    },
  ],
  "4": [
    {
      id: 19,
      nickname: "OverwatchHero",
      email: "overwatchhero@example.com",
      gender: "male",
      description: "오버워치의 영웅과 함께 플레이하세요.",
      birthday: "1992-11-11",
      profile_image: "https://picsum.photos/200/300?random=7",
      is_online: true,
      game_id: 4,
      level: "Diamond",
      price: 12000,
      average_rating: 5,
      amount: 600,
    },
    {
      id: 20,
      nickname: "SupportMaster",
      email: "supportmaster@example.com",
      gender: "female",
      description: "최고의 서포트를 제공해드립니다.",
      birthday: "1999-05-05",
      profile_image: "https://picsum.photos/200/300?random=8",
      is_online: false,
      game_id: 4,
      level: "Platinum",
      price: 11000,
      average_rating: 4,
      amount: 450,
    },
    {
      id: 21,
      nickname: "TankCommander",
      email: "tankcommander@example.com",
      gender: "male",
      description: "강력한 방어와 공격을 모두 수행합니다.",
      birthday: "1995-03-19",
      profile_image: "https://picsum.photos/200/300?random=21",
      is_online: true,
      game_id: 4,
      level: "Gold",
      price: 9500,
      average_rating: 4,
      amount: 300,
    },
    {
      id: 22,
      nickname: "HealerOfHope",
      email: "healerofhope@example.com",
      gender: "female",
      description: "모든 팀원을 치유하는 데 집중합니다.",
      birthday: "1996-12-08",
      profile_image: "https://picsum.photos/200/300?random=22",
      is_online: false,
      game_id: 4,
      level: "Silver",
      price: 8000,
      average_rating: 3,
      amount: 200,
    },
    {
      id: 23,
      nickname: "QuickShot",
      email: "quickshot@example.com",
      gender: "male",
      description: "빠른 반응 속도로 적을 제압합니다.",
      birthday: "1993-07-21",
      profile_image: "https://picsum.photos/200/300?random=23",
      is_online: true,
      game_id: 4,
      level: "Platinum",
      price: 10500,
      average_rating: 5,
      amount: 350,
    },
    {
      id: 24,
      nickname: "ShieldGuardian",
      email: "shieldguardian@example.com",
      gender: "female",
      description: "팀을 지키는 방패 역할을 수행합니다.",
      birthday: "1997-09-15",
      profile_image: "https://picsum.photos/200/300?random=24",
      is_online: false,
      game_id: 4,
      level: "Diamond",
      price: 11500,
      average_rating: 5,
      amount: 500,
    },
  ],
};

export const handlers = [
  http.get(`${local}/api/v1/mates/:gameId?page=1`, ({ params }) => {
    const { gameId } = params;

    if (!mateData[gameId as string]) {
      return HttpResponse.json({ error: "올바르지 않은 게임 카테고리 입니다." }, { status: 404 });
    }

    const response = mateData[gameId as string];
    return HttpResponse.json(response);
  }),
];
