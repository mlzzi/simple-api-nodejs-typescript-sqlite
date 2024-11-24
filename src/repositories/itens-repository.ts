import Item from '../models/item';
import database from './database';

const itensRepository = {
    criar: (item: Item, callback: (id?: number) => void) => {
        const sql = 'INSERT INTO itens (nome, descricao) VALUES (?, ?)'
        const params = [item.nome, item.descricao]
        database.run(sql, params, function(_err) {
            callback(this?.lastID)
        })
    },
    lerTodos: (callback: (itens: Item[]) => void) => {
        const sql = 'SELECT * FROM itens';
        database.all(sql, [], (err, rows: Item[]) => { // Tipagem explícita
            if (err) {
                console.error('Erro ao buscar itens:', err);
                callback([]); // Retorna array vazio em caso de erro
                return;
            }
            callback(rows); // Garante que rows é um array de Items
        });
    },    
    ler: (id: number, callback: (item?: Item) => void) => {
        const sql = 'SELECT * FROM itens WHERE id = ?';
        const params = [id];
        database.get(sql, params, (err, row: Item | undefined) => { // Tipagem explícita
            if (err) {
                console.error(`Erro ao buscar item com ID ${id}:`, err);
                callback(undefined);
                return;
            }
            callback(row); // Retorna o item encontrado ou undefined
        });
    },    
    atualizar: (id: number, item: Item, callback: (notFound: boolean) => void) => {
        const sql = 'UPDATE itens SET nome = ?, descricao = ? WHERE id = ?'
        const params = [item.nome, item.descricao, id]
        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })
    },
    apagar: (id: number, callback: (notFound: boolean) => void) => {
        const sql = 'DELETE FROM itens WHERE id = ?'
        const params = [id]
        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })
    },
}

export default itensRepository;