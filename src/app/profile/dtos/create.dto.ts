
  import { z } from 'zod';

  export type createDto = z.output<typeof Create>
  export const Create = z.object({
    // Defina as props de criação aqui
  });
  