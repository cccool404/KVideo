
/**
 * Video Source Configuration and Management
 * Handles third-party video API sources with validation and health checks
 */

import type { VideoSource } from '@/lib/types';
import { DEFAULT_SOURCES } from './default-sources';
import { PREMIUM_SOURCES } from './premium-sources';

/**
 * Parse video sources from KVIDEO_SOURCES environment variable
 * Format: JSON array of VideoSource objects
 */
function getEnvSources(): VideoSource[] {
  if (process.env.KVIDEO_SOURCES) {
    try {
      const parsed = JSON.parse(process.env.KVIDEO_SOURCES);
      if (Array.isArray(parsed)) {
        console.log('Loaded', parsed.length, 'sources from KVIDEO_SOURCES env var');
        return parsed as VideoSource[];
      }
    } catch (e) {
      console.error('Failed to parse KVIDEO_SOURCES env var:', e);
    }
  }
  return [];
}

// Cache the combined sources list
let cachedSources: VideoSource[] | null = null;

/**
 * Get source by ID from default sources, premium sources, and env var sources
 */
export function getSourceById(id: string): VideoSource | undefined {
  // Build combined sources list (cache for performance)
  if (cachedSources === null) {
    const envSources = getEnvSources();
    cachedSources = [
      ...DEFAULT_SOURCES,
      ...PREMIUM_SOURCES,
      ...envSources
    ];
  }

  // Search in combined sources
  return cachedSources.find(source => source.id === id);
}
