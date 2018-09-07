import { PersonasManagerModule } from './personas-manager.module';

describe('PersonasManagerModule', () => {
  let personasManagerModule: PersonasManagerModule;

  beforeEach(() => {
    personasManagerModule = new PersonasManagerModule();
  });

  it('should create an instance', () => {
    expect(personasManagerModule).toBeTruthy();
  });
});
