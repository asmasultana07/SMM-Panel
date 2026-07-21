
import twitterImg from '@/assets/Twitter.png';
import instagramImg from '@/assets/Instagram.png';
import facebookImg from '@/assets/Facebook.png';
import youtubeImg from '@/assets/Youtube.png';
import magazineImg from '@/assets/Magazine.png';
import mixtapeImg from '@/assets/Mixtape.png';
import mailImg from '@/assets/Mail.png';
import callImg from '@/assets/DJcall.png';
import videoImg from '@/assets/Video.png';
import blogImg from '@/assets/Video.png';
import radioImg from '@/assets/Video.png';

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaTiktok,
  FaLinkedinIn,
  FaTelegram,
  FaDiscord,
  FaSpotify,
  FaSoundcloud,
  FaSnapchat,
  FaChartLine,
} from 'react-icons/fa6';

export const navLinks = [
  { name: 'Home', path: '#' },
  { name: 'Service', path: '#Service' },
  { name: 'About', path: '#AboutUs' },
  { name: 'API', path: '#' },
  { name: 'Contact', path: '#Contact' },
];

export const services = [
  {
    image: twitterImg, 
    platform: 'Twitter',
    price: 189.95,
    details: '(500 to 5,000 followers, likes, and retweets)',
  },
  {
    image: instagramImg,
    platform: 'Instagram',
    price: 145.95,
    details: '(10,000 real Instagram followers, and real engagement)',
  },
  {
    image: facebookImg,
    platform: 'Facebook',
    price: 139.95,
    details: '(1,000 to 10,000 real Facebook followers, likes, and video views)',
  },
  {
    image: youtubeImg,
    platform: 'YouTube',
    price: 189.95,
    details: '(220+ real YouTube subscribers, video views, over 3000 dislikes, likes, and shares)',
  },
  {
    image: magazineImg,
    platform: 'Magazine Placement',
    price: 250.00,
    details: '(Full Page Q&A Interview, Photo Shoot)',
  },
   {
    image: mixtapeImg,
    platform: 'Mixtape Placement',
    price: 25.00,
    details: '((Per Song) $25.00 (Per Mixtape) via DJ’S around the world.)',
  },
   {
    image: blogImg,
    platform: 'Blog Placement',
    price: 175.00,
    details: '(Depending on blog Sites)',
  },
   {
    image: callImg,
    platform: 'DJ Conference Call',
    price: 125.00,
    details: '(20 or more DJ’S From Via States on one call includes 2 weeks of Flyer & Mp3 promo before conference)',
  },
   {
    image: radioImg,
    platform: 'Radio Placement',
    price: 700,
    details: '(FM, Colleges, Streaming will be going for Adds & Charted/Playlist)',
  },
   {
    image: videoImg,
    platform: 'Video Placement',
    price: 100,
    details: '(Top 10 Indie video countdown on video channel site)',
  },
   {
    image: mailImg,
    platform: 'Mail Marketing',
    price: 300,
    details: '(includes 2 looks & over 200 mails)',
  }
];

export const workingProcessSteps = [
  {
    step: 'Step 01',
    title: 'Sign Up For Free',
    description:
      'Sign up for your account, fill in the required information, and get instant access to powerful social media growth services.',
    color: '#F47B20',
    isActive: true,
  },
  {
    step: 'Step 02',
    title: 'Add Funds',
    description:
      'Securely add funds to your account using your preferred payment method and keep your balance ready for instant orders.',
    color: '#C4272E',
    isActive: false,
  },
  {
    step: 'Step 03',
    title: 'Select Service',
    description:
      'Browse our wide range of social media services, choose the platform and package that fits your goals, then proceed with confidence.',
    color: '#8B1A4A',
    isActive: false,
  },
  {
    step: 'Step 04',
    title: 'Place your order',
    description:
      'Enter your target link, confirm your order, and watch your social media growth begin with fast, reliable delivery.',
    color: '#3D1053',
    isActive: false,
  },
];

export const platforms = [
  {
    key: 'facebook',
    name: 'Facebook',
    icon: FaFacebookF,
    iconBg: '#1877F2',
    heading: 'Facebook SMM Panel',
    description:
      "Facebook is still the biggest social media platform in Bangladesh with millions of active users. Our Facebook SMM Panel helps you increase page likes, post engagement, and video views quickly. It is perfect for businesses, shops, and creators. You can grow your audience fast, get real attention, and improve your online presence with simple and effective services.",
  },
  {
    key: 'instagram',
    name: 'Instagram',
    icon: FaInstagram,
    iconBg: '#E1306C',
    heading: 'Instagram SMM Panel',
    description:
      'Instagram is where brands, creators, and influencers build their audience. Our Instagram SMM Panel helps you grow real followers, likes, comments, and video views fast. Perfect for boosting your profile credibility and reaching a wider audience with genuine, high-quality engagement.',
  },
  {
    key: 'twitter',
    name: 'X (Twitter)',
    icon: FaXTwitter,
    iconBg: '#0B0B0B',
    heading: 'X (Twitter) SMM Panel',
    description:
      'X (Twitter) helps you stay relevant with real-time conversations. Our X SMM Panel boosts your followers, retweets, likes, and impressions so your voice gets heard. Ideal for businesses, public figures, and creators who want faster growth and stronger engagement.',
  },
  {
    key: 'youtube',
    name: 'YouTube',
    icon: FaYoutube,
    iconBg: '#FF0000',
    heading: 'YouTube SMM Panel',
    description:
      'YouTube is the top platform for video content and long-term audience building. Our YouTube SMM Panel increases subscribers, views, likes, and watch time, helping your channel grow faster, rank better, and build lasting credibility with your audience.',
  },
  {
    key: 'tiktok',
    name: 'TikTok',
    icon: FaTiktok,
    iconBg: '#0B0B0B',
    heading: 'TikTok SMM Panel',
    description:
      'TikTok is the fastest growing platform for viral, short-form content. Our TikTok SMM Panel helps you gain followers, likes, views, and shares quickly, giving your videos the initial push they need to reach the For You page and grow organically.',
  },
  {
    key: 'linkedin',
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    iconBg: '#0A66C2',
    heading: 'LinkedIn SMM Panel',
    description:
      'LinkedIn is essential for professional branding and B2B growth. Our LinkedIn SMM Panel boosts your connections, followers, post engagement, and company page visibility, helping professionals and businesses build authority and reach the right audience.',
  },
  {
    key: 'telegram',
    name: 'Telegram',
    icon: FaTelegram,
    iconBg: '#26A5E4',
    heading: 'Telegram SMM Panel',
    description:
      'Telegram is a growing hub for communities, channels, and groups. Our Telegram SMM Panel increases members, views, post reactions, and channel credibility fast, helping you build an active and trustworthy community around your brand.',
  },
  {
    key: 'discord',
    name: 'Discord',
    icon: FaDiscord,
    iconBg: '#5865F2',
    heading: 'Discord SMM Panel',
    description:
      'Discord powers communities for gaming, creators, and businesses alike. Our Discord SMM Panel helps you grow server members and online presence quickly, making your server look active, trustworthy, and worth joining for new visitors.',
  },
  {
    key: 'spotify',
    name: 'Spotify',
    icon: FaSpotify,
    iconBg: '#1DB954',
    heading: 'Spotify SMM Panel',
    description:
      'Spotify success depends on plays, followers, and playlist reach. Our Spotify SMM Panel helps artists and labels increase streams, followers, and playlist saves, boosting algorithmic visibility and helping your music reach a wider audience.',
  },
  {
    key: 'soundcloud',
    name: 'SoundCloud',
    icon: FaSoundcloud,
    iconBg: '#FF5500',
    heading: 'SoundCloud SMM Panel',
    description:
      'SoundCloud remains a favorite for independent artists and producers. Our SoundCloud SMM Panel boosts plays, likes, reposts, and followers, helping your tracks gain traction, build credibility, and get discovered by new listeners.',
  },
  {
    key: 'snapchat',
    name: 'Snapchat',
    icon: FaSnapchat,
    iconBg: '#FFFC00',
    heading: 'Snapchat SMM Panel',
    description:
      'Snapchat connects you with a younger, highly engaged audience. Our Snapchat SMM Panel increases followers, story views, and score fast, helping influencers and brands stay visible and build stronger connections with their audience.',
  },
  {
    key: 'website-traffic',
    name: 'Website Traffic',
    icon: FaChartLine,
    iconBg: '#F47B20',
    heading: 'Website Traffic Services',
    description:
      'More traffic means more opportunities and better search rankings. Our Website Traffic services drive real, targeted visitors to your site, helping improve engagement metrics, SEO performance, and overall online visibility for your business.',
  },
];

