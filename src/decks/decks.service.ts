import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DecksService {
  private decks = [
    { id: 0, name: 'spanish' },
    { id: 1, name: 'russian' },
  ];

  getDecks(name?: string) {
    if (name) {
      return this.decks.filter((deck) => deck.name === name)[0];
    }
    return this.decks;
  }

  getDeck(id: number) {
    const deck = this.decks.find((deck) => deck.id === id);

    if (!deck) {
      throw new Error('deck not found');
    }
    return deck;
  }

  createDeck(createDeckDto: CreateDeckDto) {
    const newDeck = {
      ...createDeckDto,
      id: Date.now(),
    };

    this.decks.push(newDeck);

    return newDeck;
  }

  updateDeck(id: number, updateDeckDto: UpdateDeckDto) {
    this.decks = this.decks.map((deck) => {
      if (deck.id === id) {
        return { ...deck, ...updateDeckDto };
      }
      return deck;
    });

    return this.getDeck(id);
  }

  removeDeck(id: number) {
    const toBeRemoved = this.getDeck(id);
    this.decks = this.decks.filter((deck) => deck.id !== id);

    return toBeRemoved;
  }
}
