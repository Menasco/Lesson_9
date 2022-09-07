import axios from 'axios';
import { QuizType } from 'types/api';

const API_KEY = 'V0e27cv7yuTX8KwGtZsIYtcsf28yeGnBOe8S6DKX';

const DIFFICULTY = 'easy';

const LIMIT = 3;

export const getQuizzes = (): Promise<QuizType[]> =>
    axios
        .get<QuizType[]>(`https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&difficulty=${DIFFICULTY}&limit=${LIMIT}`)
        .then((response) => response.data);
