import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { TenantContext } from './durable-context-id.strategy';

@Injectable({ scope: Scope.REQUEST, durable: true })
export class DurableService {
  public instanceCounter = 0;

  constructor(
    @Inject(REQUEST) private readonly requestPayload: TenantContext,
  ) {}

  greeting() {
    ++this.instanceCounter;
    return `Hello world! Counter: ${this.instanceCounter}`;
  }

  getTenantId() {
    return this.requestPayload.tenantId;
  }
}
