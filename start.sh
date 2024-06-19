npx supabase stop --no-backup
npx supabase start
./sync.sh
./seed.sh
npx supabase gen types typescript --local > ./database/database.types.ts
npx expo start --localhost -c