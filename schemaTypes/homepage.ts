import { defineArrayMember, defineField, defineType } from 'sanity'

export const homepage = defineType({
    name: 'homepage',
    title: 'homepage',
    type: 'document',
    options: {
        singleton: true
    },
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            type: 'object',
            name: 'hero',
            fields: [
                { type: 'string', name: 'title' },
                { type: 'string', name: 'text' },
                {
                    name: 'stats',
                    type: 'array',
                    title: 'Stats for hero',
                    of: [
                        defineArrayMember({
                            type: 'object',
                            name: 'stat',
                            fields: [
                                { type: 'string', name: 'value' },
                                { type: 'string', name: 'text' },
                            ]
                        }),
                    ]
                }
            ]
        })
    ]
})