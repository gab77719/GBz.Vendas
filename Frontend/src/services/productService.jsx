const BASE_URL = 'https://fakestoreapi.com/products';

/**
 *  GET - Ler todos os produtos
 *  @returns {Promise<Array>} Lista de produtos
 */

export async function getProducts() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) 
            throw new Error('Erro ao buscar produtos');
            const data = await response.json();
            return data;
        }  catch (error) {
            console.error('Erro em getProducts: ', error);
            return [];
        }
}

/**
 * GET - Ler produto por ID
 * @param {number} id - ID do produto
 * @returns {Promise<Object>} Produto
 */

export async function getProductById(id) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);
        if (!response.ok) 
            throw new Error('Erro ao buscar produto');
            const data = await response.json();
            return data;
        }  catch (error) {
            console.error('Erro em getProductById: ', error);
            return null;
        }
}


/**
 * POST - Criar novo produto
 * @param {Object} product - Dados do produto
 * @return {Promise<Object>} Produto criado
 */

export async function createProduct(product) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product),
        });
        if (!response.ok) 
            throw new Error('Erro ao criar produto');
            const data = await response.json();
            return data;
        }  catch (error) {
            console.error('Erro em createProduct: ', error);
            return null;
        }
}


/**
 * PUT - Atualizar produto
 * @param {number} id - ID do produto
 * @param {Object} product - Dados atualizados do produto
 * @return {Promise<Object>} Produto atualizado
 */

export async function updateProduct(id, product) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product),
        });
        if (!response.ok) 
            throw new Error('Erro ao atualizar produto');
            const data = await response.json();
            return data;
        }  catch (error) {
            console.error('Erro em updateProduct: ', error);
            return null;
        }
}


/**
 * DELETE - Excluir produto
 * @param {number} id - ID do produto
 * @returns {Promise<boolean>} True se excluido, false caso contrário
 */

export async function deleteProduct(id) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) 
            throw new Error('Erro ao excluir produto');
            return true;
        }  catch (error) {
            console.error('Erro em deleteProduct: ', error);
            return false;
        }
}