import Link from "next/link";

interface Props {
  className?: string;
}

export default function DownloadButtons({ className = "" }: Props) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      {/* App Store badge */}
      <a href="https://apps.apple.com/fr/app/veasy/id6761346117" target="_blank" rel="noopener noreferrer" aria-label="Télécharger sur l'App Store">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="160"
          height="53"
          viewBox="0 0 160 53"
          role="img"
          aria-hidden="true"
        >
          <rect width="160" height="53" rx="8" fill="#000000" />
          <rect
            x="0.5"
            y="0.5"
            width="159"
            height="52"
            rx="7.5"
            stroke="white"
            strokeOpacity="0.15"
            fill="none"
          />
          {/* Apple logo */}
          <path
            d="M28.5 14.2c1.2-1.5 2-3.5 1.8-5.5-1.7.1-3.8 1.1-5 2.6-1.1 1.3-2 3.3-1.7 5.3 1.9.1 3.8-.9 4.9-2.4zm1.8 2.9c-2.7-.2-5 1.6-6.3 1.6-1.3 0-3.3-1.5-5.4-1.5-2.8 0-5.4 1.6-6.8 4.1-2.9 5-0.8 12.4 2.1 16.5 1.4 2 3 4.2 5.2 4.2 2.1-.1 2.9-1.4 5.4-1.4 2.6 0 3.2 1.4 5.4 1.3 2.2 0 3.7-2 5.1-4 1.6-2.3 2.2-4.5 2.3-4.6-.1 0-4.4-1.7-4.4-6.6 0-4.1 3.3-6 3.5-6.2-1.9-2.8-4.9-3.4-6.1-3.4z"
            fill="white"
          />
          {/* Download on the */}
          <text
            x="45"
            y="22"
            fill="white"
            fontSize="10"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif"
            fontWeight="400"
            letterSpacing="0.2"
          >
            Download on the
          </text>
          {/* App Store */}
          <text
            x="45"
            y="38"
            fill="white"
            fontSize="21"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif"
            fontWeight="600"
            letterSpacing="-0.3"
          >
            App Store
          </text>
        </svg>
      </a>

      {/* Google Play badge */}
      <a href="#" aria-label="Télécharger sur Google Play">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="160"
          height="53"
          viewBox="0 0 160 53"
          role="img"
          aria-hidden="true"
        >
          <rect width="160" height="53" rx="8" fill="#000000" />
          <rect
            x="0.5"
            y="0.5"
            width="159"
            height="52"
            rx="7.5"
            stroke="white"
            strokeOpacity="0.15"
            fill="none"
          />
          {/* Google Play triangle logo */}
          <path d="M14 13.5l16.5 13L14 39.5V13.5z" fill="#EA4335" />
          <path d="M14 13.5l9.5 9.5-9.5 9.5V13.5z" fill="#FBBC04" />
          <path d="M14 13.5l16.5 13-7 5.5L14 13.5z" fill="#34A853" />
          <path d="M30.5 26.5l-7 5.5 7 5.5 5-5.5-5-5.5z" fill="#4285F4" />
          {/* GET IT ON */}
          <text
            x="44"
            y="22"
            fill="white"
            fontSize="10"
            fontFamily="'Roboto', 'Helvetica Neue', sans-serif"
            fontWeight="400"
            letterSpacing="1"
          >
            GET IT ON
          </text>
          {/* Google Play */}
          <text
            x="44"
            y="38"
            fill="white"
            fontSize="19"
            fontFamily="'Roboto', 'Helvetica Neue', sans-serif"
            fontWeight="500"
            letterSpacing="-0.2"
          >
            Google Play
          </text>
        </svg>
      </a>
    </div>
  );
}
