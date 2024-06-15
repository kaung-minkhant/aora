/**
 * ! Executing this script will delete all data in your database and seed it with 10 video.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from "@snaplet/seed";
import { createClient } from "@supabase/supabase-js";

const main = async () => {
  const seed = await createSeedClient({ dryRun: true });

  const supabase = createClient(
    process.env.EXPO_PUBLIC_SUPABASE_URL || '',
    process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || ''
  );

  // Truncate all tables in the database
  await seed.$resetDatabase();

  await supabase.auth.signUp({
    email: "polar@gmail.com",
    password: "000000",
    options: {
      data: {
        user_name: "polar",
      },
    },
  });

  await seed.video([
    {
      title: "Get inspired to code",
      thumbnail: "https://i.ibb.co/tJBcX20/Appwrite-video.png",
      video: "https://player.vimeo.com/video/949579770?h=897cd5e781",
      prompt:
        "Create a motivating AI driven video aimed at inspiring coding enthusiasts with simple language",
    },
    {
      title: "How AI Shapes Coding Future",
      thumbnail: "https://i.ibb.co/Xkgk7DY/Video.png",
      video: "https://player.vimeo.com/video/949581999?h=4672125b31",
      prompt: "Picture the future of coding with AI. Show AR VR",
    },
    {
      title: "Dalmatian's journey through Italy",
      thumbnail: "https://i.ibb.co/CBYzyKh/Video-1.png",
      video: "https://player.vimeo.com/video/949582778?h=d60220d68d",
      prompt:
        "Create a heartwarming video following the travels of dalmatian dog exploring beautiful Italy",
    },
    {
      title: "Meet small AI friends",
      thumbnail: "https://i.ibb.co/7XqVPVT/Photo-1677756119517.png",
      video: "https://player.vimeo.com/video/949616422?h=d60220d68d",
      prompt:
        "Make a video about a small blue AI robot blinking its eyes and looking at the screen",
    },
    {
      title: "Find inspiration in Every Line",
      thumbnail: "https://i.ibb.co/mGfCYJY/Video-2.png",
      video: "https://player.vimeo.com/video/949617485?h=d60220d68d",
      prompt:
        "A buy working on his laptop that sparks excitement for coding, emphasizing the endless possibilities and personal growth it offers",
    },
    {
      title: "Japan's Blossoming temple",
      thumbnail: "https://i.ibb.co/3Y2Nk7q/Bucket-215.png",
      video: "https://player.vimeo.com/video/949618057?h=d60220d68d",
      prompt:
        "Create a captivating video journey through Japan's Sakura Temple",
    },
    {
      title: "A Glimpse into Tomorrow's VR World",
      thumbnail: "https://i.ibb.co/C5wXXf9/Video-3.png",
      video: "https://player.vimeo.com/video/949620017?h=d60220d68d",
      prompt: "An imaginative video envisioning the future of Virtual Reality",
    },
    {
      title: "A World where Ideas Grow Big",
      thumbnail: "https://i.ibb.co/DzXRfyr/Bucket-59038.png",
      video: "https://player.vimeo.com/video/949620200?h=d60220d68d",
      prompt:
        "Make a fun video about hackers and all the cool stuff they do with computers",
    },
  ]);
  // Seed the database with 10 video
  // await seed.video((x) => x(10));

  // Type completion not working? You might want to reload your TypeScript Server to pick up the changes

  process.exit();
};

main();
