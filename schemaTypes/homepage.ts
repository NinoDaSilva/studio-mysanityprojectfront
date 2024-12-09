import { defineArrayMember, defineField, defineType } from 'sanity'

export const homepage = defineType({
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    options: {
        singleton: true
    },
    fields: [
        defineField({
            type: 'object',
            name: 'hero',
            fields: [
                { type: 'string', name: 'title' },
                { type: 'string', name: 'text' },
                { type: 'boolean', name: 'showButton' },
                { type: 'string', name: 'buttonLabel' },
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