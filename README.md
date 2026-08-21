# FiyatPilot

**Akıllı alışveriş. Doğru karar.**

Turkish AI shopping intelligence platform for product discovery, price comparison, recommendations, price alerts and affiliate commerce.

## Development

```bash
npm install
npm run dev
```

Set variables from `.env.example`. For a local UI-only run, set `FIYATPILOT_DEMO_MODE=true`. Demo catalog values are development-only.

Production requires configured Supabase and real merchant/feed data. Affiliate destinations fail closed until configured. Never publish fake prices, reviews, revenue or Search Console metrics.

## Routes

`/` · `/ara?q=` · `/laptop` · `/urun/[slug]` · `/karsilastir` · `/firsatlar` · `/admin` · `/sitemap.xml` · `/robots.txt`

## APIs

`GET /api/search?q=` — catalog search

`POST /api/recommend` — recommendation engine

`GET/POST /api/alerts` — authenticated price alerts

`/api/go/*` — affiliate redirect boundary
