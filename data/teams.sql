-- teams.sql
-- SQL script to create and seed a SQLite teams database

BEGIN TRANSACTION;

-- Create the teams table
CREATE TABLE IF NOT EXISTS teams (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  team          TEXT    NOT NULL,
  jersey_color  TEXT    NOT NULL,
  play_style    TEXT    NOT NULL,
  league        TEXT    NOT NULL,
  atmosphere    TEXT    NOT NULL
);

-- Seed data
INSERT INTO teams (team, jersey_color, play_style, league, atmosphere) VALUES
  ('Manchester City',        'blue',  'attacking', 'premier',    'modern'),
  ('Manchester United',      'red',   'defensive', 'premier',    'historic'),
  ('Liverpool',              'red',   'attacking', 'premier',    'intense'),
  ('Arsenal',                'red',   'attacking', 'premier',    'modern'),
  ('Newcastle United',       'black', 'defensive', 'premier',    'intense'),
  ('Chelsea',                'blue',  'defensive', 'premier',    'historic'),
  ('Tottenham Hotspur',      'white', 'attacking', 'premier',    'intense'),
  ('Real Madrid',            'white', 'attacking', 'laliga',     'historic'),
  ('Barcelona',              'blue',  'attacking', 'laliga',     'intense'),
  ('Atlético Madrid',    'red',   'defensive', 'laliga',     'historic'),
  ('Sevilla',                'white', 'defensive', 'laliga',     'intense'),
  ('Bayern Munich',          'red',   'attacking', 'bundesliga', 'modern'),
  ('Bayer Leverkusen',       'red',   'attacking', 'bundesliga', 'intense'),
  ('RB Leipzig',             'white', 'attacking', 'bundesliga', 'modern'),
  ('Juventus',               'white', 'defensive', 'seriea',     'historic'),
  ('Inter Milan',            'black', 'attacking', 'seriea',     'historic'),
  ('AC Milan',               'red',   'defensive', 'seriea',     'modern'),
  ('Napoli',                 'blue',  'attacking', 'seriea',     'intense'),
  ('Paris Saint-Germain',    'blue',  'attacking', 'ligue1',     'modern'),
  ('Olympique Lyonnais',     'white', 'attacking', 'ligue1',     'intense'),
  ('Olympique de Marseille', 'white', 'defensive', 'ligue1',     'historic'),
  ('AS Monaco',              'red',   'attacking', 'ligue1',     'modern');

COMMIT;
