import type { Email, Phone, UserId, UserProfileId } from '@hbcore/types';
import type { DataSource } from 'typeorm';
import { Repository } from 'typeorm';
import { UserProfileEntity } from '../entities/users/user-profile.entity.js';

/**
 * Repository for UserProfile entity operations.
 * Provides typed methods for common database operations on user profiles.
 */
export class UserProfileRepository {
  private repository: Repository<UserProfileEntity>;

  constructor(private dataSource: DataSource) {
    this.repository = dataSource.getRepository(UserProfileEntity);
  }

  /**
   * Find a profile by ID
   */
  async findById(id: UserProfileId): Promise<UserProfileEntity | null> {
    return this.repository.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  /**
   * Find a profile by user ID
   */
  async findByUserId(userId: UserId): Promise<UserProfileEntity | null> {
    return this.repository.findOne({
      where: { userId },
      relations: ['user'],
    });
  }

  /**
   * Find a profile by email
   */
  async findByEmail(email: Email): Promise<UserProfileEntity | null> {
    return this.repository.findOne({
      where: { email },
      relations: ['user'],
    });
  }

  /**
   * Find a profile by phone
   */
  async findByPhone(phone: Phone): Promise<UserProfileEntity | null> {
    return this.repository.findOne({
      where: { phone },
      relations: ['user'],
    });
  }

  /**
   * Find profiles by criteria
   */
  async find(where?: Partial<UserProfileEntity>): Promise<UserProfileEntity[]> {
    return this.repository.find({
      where: where as any,
      relations: ['user'],
    });
  }

  /**
   * Find one profile by criteria
   */
  async findOne(where: Partial<UserProfileEntity>): Promise<UserProfileEntity | null> {
    return this.repository.findOne({
      where: where as any,
      relations: ['user'],
    });
  }

  /**
   * Create a new profile
   */
  async create(data: Partial<UserProfileEntity>): Promise<UserProfileEntity> {
    const profile = this.repository.create(data);
    return this.repository.save(profile);
  }

  /**
   * Save a profile entity
   */
  async save(profile: UserProfileEntity): Promise<UserProfileEntity> {
    return this.repository.save(profile);
  }

  /**
   * Update a profile by ID
   */
  async update(id: UserProfileId, data: Partial<UserProfileEntity>): Promise<void> {
    await this.repository.update(id, data);
  }

  /**
   * Delete a profile by ID (soft delete)
   */
  async delete(id: UserProfileId): Promise<void> {
    await this.repository.softDelete(id);
  }

  /**
   * Get the underlying TypeORM repository for advanced operations
   */
  getRepository(): Repository<UserProfileEntity> {
    return this.repository;
  }
}
