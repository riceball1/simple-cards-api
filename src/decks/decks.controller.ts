import { Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('decks')
export class DecksController {
    // GET /decks --> []
    @Get()
    getDecks(@Query('type') type: string) {
        return [{type}]
    }

    // GET /decks/:id --> {...}
    @Get(':id')
    getOneDeck(@Param('id') id: string) {
        return {id}
    }
    // POST /decks
    @Post()
    createDeck() {
        return {}
    }

    // PUT /decks/:id --> {...}
    @Put(':id')
    updateDeck(@Param('id') id: string) {
        return {id}
    }

    // DELETE /decks/:id --> {...}
    @Delete(':id')
    deleteDeck(@Param('id') id: string) {
        return {id}
    }
}
