npx supabase stop --no-backup
npx supabase start
./sync.sh
./seed.sh
npx expo start -c