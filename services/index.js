import { createClient } from 'contentful';

const Client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
});

/**
 * Fetch a set of the specified content type
 *
 * See the Contentful docs for a complete list of query options:
 * @link https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters
 *
 * @param type
 * @param query
 * @params options
 *      * raw_results: set to true if you want the raw api response from Contentful
 * @returns {Promise<Array[ContentfulEntity]>}
 */
export async function fetchAll(type, query = {}) {
    query.content_type = type;
    const results = await Client.getEntries(query);
    if (!results.items) {
        return [];
    }
    const items = results.items;
    for (var key in items) {
        items[key] = cleanupContentfulData(items[key]);
    }
    return items;
}

/**
 * Fetch a single content item
 *
 * See the Contentful docs for a complete list of query options:
 * @link https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters
 *
 * @param type
 * @param query
 * @params options
 *      * raw_results: set to true if you want the raw api response from Contentful
 * @returns {Promise<ContentfulEntity>}
 */
export async function fetchOne(type, query = {}, options = {}) {
    const results = await fetchAll(type, query, options);
    if (results && results.length) {
        return cleanupContentfulData(results[0]);
    }
    return null;
}

/**
 * Fetch the landing page
 */
export function fetchLanding() {
    return fetchOne('landingPage', {
        include: 2,
    });
}

/**
 * Utility function to cleanup Contentful data by recursively removing the 'fields' key and moving data up the object
 *
 * @param path
 * @returns {Promise<ContentfulEntity>}
 */
function cleanupContentfulData(data) {
    if (data.fields) {
        if (data.sys && data.sys.contentType && data.sys.contentType.sys) {
            // Perserve the content type id
            data.fields._contentTypeId = data.sys.contentType.sys.id;
            data.fields._id = data.sys.id;
        }
        data = data.fields;
    }
    for (var key in data) {
        let child = data[key];
        if (child.fields) {
            data[key] = cleanupContentfulData(child);
        } else if (Array.isArray(child)) {
            for (var childKey in child) {
                let grandchild = child[childKey];
                if (grandchild.fields) {
                    child[childKey] = cleanupContentfulData(grandchild);
                }
            }
        }
    }
    return data;
}

export { Client };
