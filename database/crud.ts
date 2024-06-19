import humps from 'humps'
import { supabase } from './supabase';
import { throwErrorWithData } from '@utils/index';
import { ErrorCodes } from '@utils/ErrorCodes';

type TTableName = 'profile' | 'video'
interface TGetAllRows {
  tableName: TTableName;
}
export async function getAllRows(options: TGetAllRows) {
  const {data, error} = await supabase.from(options.tableName).select()
  if (error) {
    return throwErrorWithData(error.message, {type: ErrorCodes.DBReadError})
  }
  return data
}