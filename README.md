# SPS Fullstack Zadání

Tento projekt obsahuje frontend i backend aplikace pro zadání SPS.
Cílem je mít plně funkční fullstack aplikaci s oddělenými částmi pro klienta i server.

---

## Instalace a spuštění

### 1. Klonování repozitáře

```bash
git clone https://github.com/mr12n21/sps-fullstack-zadani.git
cd sps-fullstack-zadani
```

### 2. Instalace Node modulů

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

### 3. Spuštění aplikace

#### Vývojové prostředí (lokální spuštění)

**Backend**

```bash
cd backend
npm run dev
```

**Frontend**

```bash
cd ../frontend
npm run dev
```

Frontend běží na [http://localhost:3000](http://localhost:3000) (nebo podle konfigurace) a backend na [http://localhost:5000](http://localhost:5000) (nebo podle nastavení).

---

## Spuštění pomocí Docker Compose

Pro jednodušší běh celé aplikace můžeš využít Docker Compose.

### Důležité

Někdy je potřeba před spuštěním odstranit existující Docker image a kontejnery, pokud se objeví problémy:

```bash
docker compose down -v
```

Následně se spustí sestava s novou sestavenou verzí:

```bash
docker compose up --build
```


## Poznámky a osobní reflexe

Příště bych se chtěl zaměřit na to odevzdat nějakou funkční verzi frontendu, aby celý projekt byl kompletnější a lépe testovatelný.

Z projektu si odnáším důležitou zkušenost hlavně z hlediska odhadu času a plánování.
Uvědomuji si, že často věci dělám na poslední chvíli a až na poslední možný termín, což není ideální. Měl bych se zaměřit na lepší plánování, rozdělení práce a řešení jednotlivých částí postupně.

Tento přístup mi pomůže zlepšit kvalitu kódu, snížit stres a zvýšit pravděpodobnost, že výsledný produkt bude funkční a včas hotový.
