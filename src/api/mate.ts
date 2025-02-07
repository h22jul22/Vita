import { client } from './client';

/**
 * POST /api/v1/mates/register/
 * @param mateInfo 사용자 정보 { game_id, level, description, image, request_price }
 * @returns 등록된 사용자 메이트 정보
 */
export const registerGameMate = (mateInfo: FormData) => {
  return client.post(`/api/v1/mates/register/`, mateInfo, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

interface MateParams {
  gameId?: string;
  sortValue?: string;
  genderValue?: string;
  levelValue?: string[];
  pageParam?: number;
}
/**
 * GET /api/v1/mates/${gameId}/
 * @param param0 쿼리스트링 { gameId, sortValue, genderValue, levelValue, pageParam }
 * @returns 게임 ID에 해당하는 메이트 프로필들
 */
export const fetchGameMateProfiles = async ({ gameId, sortValue, genderValue, levelValue, pageParam }: MateParams) => {
  try {
    // 파라미터가 존재할 경우에만 params에 추가
    const params: Record<string, string | number | undefined> = {};
    if (sortValue) params.sort = sortValue;
    if (genderValue) params.gender = genderValue;
    if (levelValue) params.level = levelValue.join(',');
    if (pageParam !== undefined) params.page = pageParam;

    const { data } = await client.get(`/api/v1/mates/${gameId}/`, {
      params,
    });

    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

/**
 * @param params 쿼리스트링 {sort, gender, level, pageParam}
 * @returns 모든 카테고리의 메이트 프로필들
 */
export const fetchAllCategoryMates = async ({ sortValue, genderValue, levelValue, pageParam }: MateParams) => {
  try {
    // 파라미터가 존재할 경우에만 params에 추가
    const params: Record<string, string | number | undefined> = {};
    if (sortValue) params.sort = sortValue;
    if (genderValue) params.gender = genderValue;
    if (levelValue) params.level = levelValue.join(',');
    if (pageParam !== undefined) params.page = pageParam;

    const { data } = await client.get(`/api/v1/mates/`, {
      params,
    });

    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
